import { selectSettings, selectTheme } from '../selectors'
import appState from '../../initialState'

describe('settings selectors', () => {
    it('should return the settings state', () => {
        expect(selectSettings(appState)).toBe(appState.settings)
    })

    it('should return the selected theme', () => {
        expect(selectTheme(appState)).toBe(appState.settings.theme)
    })
})
