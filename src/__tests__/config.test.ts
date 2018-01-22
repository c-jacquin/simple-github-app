import config from '../config'

describe('config', () => {
    it('should have correct properties', () => {
        expect(Object.keys(config)).toEqual([
            'ENV',
            'BASE_URL',
            'GITHUB_ID',
            'LANGUAGE',
            'AUTH_URL',
            'AUTH_SCOPE',
            'API_ENDPOINT',
            'LOGIN_ENDPOINT',
            'PUSH_ENDPOINT',
            'WINDOW',
            'IS_SMALL',
            'DEFAULT_THEME',
        ])
    })
})
