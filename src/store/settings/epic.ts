import { switchMap, map, catchError } from 'rxjs/operators'
import { MyEpic, ReduxAction } from '../types'
import * as settingsActions from './actions'
import { selectToken } from 'store/auth'
import { of as observableOf } from 'rxjs/observable/of'

const settingsEpic: MyEpic = (action$, store, { settingsApi }) => {
    return action$.ofType(settingsActions.UPDATE_PUSH_SETTINGS_PENDING).pipe(
        switchMap(({ payload }: ReduxAction) => {
            const token = selectToken(store.getState()) as string

            return settingsApi.updatePushSettings(token, payload)
        }),
        map(settingsActions.updatePushSettingsSuccess),
        catchError(err => {
            console.log(err)
            return observableOf(settingsActions.updatePushSettingsFailed(err))
        }),
    )
}

export default settingsEpic
