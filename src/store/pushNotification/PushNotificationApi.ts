import { Permissions, Notifications } from 'expo'
import { fromPromise } from 'rxjs/observable/fromPromise'
import { of as observableOf } from 'rxjs/observable/of'
import { Observable } from 'rxjs/Observable'
import { mergeMap, catchError } from 'rxjs/operators'

import config from 'config'

export class PushNotificationApi {
    subscription: any

    getToken(): Observable<string> {
        return fromPromise(Notifications.getExpoPushTokenAsync())
    }

    register(): Observable<Response> {
        return this.getToken().pipe(
            mergeMap(token => {
                return fetch(config.BASE_URL + config.PUSH_ENDPOINT, {
                    method: 'POST',
                    headers: {
                        Accept: 'application/json',
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify({
                        token,
                    }),
                })
            }),
            catchError(observableOf)
        )
    }

    subscribe(): Observable<Notifications.Notification> {
        return new Observable(observer => {
            this.subscription = Notifications.addListener(notif => {
                observer.next(notif)
            })

            return () => {
                this.unsubscribe()
            }
        })
    }

    unsubscribe() {
        this.subscription.remove()
    }
}
