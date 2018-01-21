import { MyEpic } from '../types'
import * as settingsActions from './actions'

const settingsEpic: MyEpic = (action$, store, { settingsApi }) => {
    return action$.ofType('SOMETHING')
}

export default settingsEpic
