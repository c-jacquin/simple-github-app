import { BehaviorSubject } from 'rxjs/BehaviorSubject'
import { Notifications } from 'expo'

export class PushNotificationApi {
    getToken() {
        return new BehaviorSubject('')
    }

    register() {
        return new BehaviorSubject(null)
    }

    subscribe() {
        return new BehaviorSubject<Notifications.Notification>({
            isMultiple: true,
            data: {},
            origin: 'selected',
            remote: true,
        })
    }

    unsubscribe() {}
}
