import { MyEpic } from '../types'
import * as bootActions from './actions'
import * as languagesActions from 'store/language/actions'
import { map, switchMap, catchError, flatMap, tap } from 'rxjs/operators'
import { of as observableOf } from 'rxjs/observable/of'

const bootEpic: MyEpic = (action$, store, { bootApi, languageApi }) => {
    return action$
        .ofType(bootActions.BOOTSTRAP_PENDING)
        .pipe(
            switchMap(() => bootApi.loadAssets()),
            switchMap(() => languageApi.getLanguage()),
            flatMap(result => [
                languagesActions.getLocaleSuccess(result),
                bootActions.bootstrapSuccess(),
            ]),
        )
}

export default bootEpic
