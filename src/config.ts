import { Dimensions } from 'react-native'

import devEnv from '../env/development.json'
import prodEnv from '../env/production.json'

const { width, height } = Dimensions.get('window')

export interface Env {
    ENV: string
    APP_NAME: string
    LANGUAGE: {
        DEFAULT_LOCALE: string
        SUPPORTED_LOCALES: string[]
    }
    GITHUB_ID: string
    PUSH_ENDPOINT: string
    AUTH_URL: string
    AUTH_SCOPE: string[]
    BASE_URL: string
    API_ENDPOINT: string
    LOGIN_ENDPOINT: string
    WINDOW: {
        WIDTH: number
        HEIGHT: number
    }
    IS_SMALL: boolean
}

let config: Env = {
    ...devEnv,
    LANGUAGE: {
        DEFAULT_LOCALE: 'en',
        SUPPORTED_LOCALES: ['en', 'fr'],
    },
    AUTH_URL: 'https://github.com/login/oauth/authorize',
    AUTH_SCOPE: ['notifications', 'user', 'repo'],
    API_ENDPOINT: 'https://api.github.com/graphql',
    LOGIN_ENDPOINT: '/auth',
    PUSH_ENDPOINT: '/push',
    WINDOW: {
        WIDTH: width,
        HEIGHT: height,
    },
    IS_SMALL: width < 375,
}

if (process.env.NODE_ENV === 'production') {
    config = {
        ...config,
        ...prodEnv,
    }
}

export default config
