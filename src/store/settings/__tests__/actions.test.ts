import * as settingsActions from '../actions'

describe('settings actions', () => {
    it('should create an action of type SET_THEME', () => {
        const expectedAction = {
            type: settingsActions.SET_THEME,
            payload: 'test',
        }
        expect(settingsActions.setTheme('test')).toEqual(expectedAction)
    })
})
