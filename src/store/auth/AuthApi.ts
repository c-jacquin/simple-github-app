import { AuthSession } from 'expo'
import { stringify } from 'query-string'

import config from 'config'

export class AuthApi {
    getToken(code: string): Promise<string> {
        return fetch(config.BASE_URL + config.LOGIN_ENDPOINT, {
            method: 'POST',
            headers: {
                Accept: 'application/json',
                'Content-Type': 'application/json',
            },
            body: JSON.stringify({
                code,
                clientId: config.GITHUB_ID,
                scope: config.AUTH_SCOPE,
            }),
        })
            .then(response => response.json())
            .then(({ token }) => token)
    }

    login(): Promise<string> {
        const queryString = stringify({
            scope: config.AUTH_SCOPE,
            client_id: config.GITHUB_ID,
        })

        return AuthSession.startAsync({
            authUrl: `${config.AUTH_URL}?${queryString}`,
        }).then(({ params: { code } }) => code)
    }
}
