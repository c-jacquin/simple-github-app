import { Permissions, Notifications } from 'expo'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { of as observableOf } from 'rxjs/observable/of'
import { Subject } from 'rxjs/Subject'
import { Observable } from 'rxjs/Observable'
import { switchMap, catchError, share } from 'rxjs/operators'

import config from 'config'

export class PushNotificationApi {
    subscription: any

    getToken(): Observable<string> {
        return fromPromise(Notifications.getExpoPushTokenAsync())
    }

    register(token: string): Observable<Response | {}> {
        return this.getToken().pipe(
            switchMap(pushToken => {
                return fetch(config.BASE_URL + config.PUSH_ENDPOINT, {
                    method: 'POST',
                    headers: new Headers({
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                        Authorization: token,
                    }),
                    body: JSON.stringify({
                        pushToken,
                    }),
                })
            }),
            catchError(observableOf),
        )
    }

    subscribe(): Subject<{}> {
        const subject = new Subject()
        this.subscription = Notifications.addListener(
            subject.next.bind(subject),
        )

        return subject
    }

    unsubscribe() {
        this.subscription.remove()
    }
}
