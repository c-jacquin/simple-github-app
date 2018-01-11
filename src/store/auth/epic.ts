import { switchMap, flatMap } from 'rxjs/operators'
import { of } from 'rxjs/observable/of'
import { NavigationActions } from 'react-navigation'
import { MyEpic } from '../types'
import * as authActions from './actions'

const authEpic: MyEpic = (action$, store, { authApi }) => {
    return action$.ofType(authActions.AUTH_PENDING).pipe(
        switchMap(() => {
            return authApi
                .login()
                .then(authApi.getToken)
                .catch(authActions.authFailed)
        }),
        flatMap(data => [
            NavigationActions.reset({
                index: 0,
                actions: [NavigationActions.navigate({ routeName: 'Home' })],
            }),
            authActions.authSuccess(data),
        ])
    )
}

export default authEpic
