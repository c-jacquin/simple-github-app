import config from 'config'

export class SettingsApi {
    async updatePushSettings(token: string, profile: {}) {
        const response = await fetch(
            config.BASE_URL + config.PUSH_PROFILE_ENDPOINT,
            {
                method: 'PUT',
                headers: new Headers({
                    Accept: 'application/json',
                    'Content-Type': 'application/json',
                    Authorization: token,
                }),
                body: JSON.stringify({
                    profile,
                }),
            },
        )
        const result = await response.json()

        return result.profile
    }
}
