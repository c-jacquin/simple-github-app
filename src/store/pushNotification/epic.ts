import { Epic, combineEpics } from 'redux-observable'
import { merge, switchMap, map, filter, tap } from 'rxjs/operators'

import config from 'config'
import { MyEpic } from '../types'
import * as pushNotificationActions from './actions'
import { selectUser } from 'store/apollo'

export const registerPushNotificationEpic: MyEpic = (
    action$,
    store,
    { pushNotificationApi },
) => {
    return action$
        .ofType(pushNotificationActions.REGISTER_PUSH)
        .pipe(
            map(() => selectUser(store.getState()).login),
            switchMap(pushNotificationApi.register.bind(pushNotificationApi)),
            map(pushNotificationActions.registerPushSuccess),
        )
}

export const subscribePushNotificationEpic: MyEpic = (
    action$,
    store,
    { pushNotificationApi },
) => {
    return action$
        .ofType(pushNotificationActions.SUBSCRIBE_PUSH)
        .pipe(
            switchMap(pushNotificationApi.subscribe),
            map(pushNotificationActions.newPushNotification),
        )
}

export default combineEpics(
    registerPushNotificationEpic,
    subscribePushNotificationEpic,
)
