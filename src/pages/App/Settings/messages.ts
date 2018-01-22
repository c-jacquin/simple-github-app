import { defineMessages } from 'react-intl'

interface Messages {
    [key: string]: any
}

const messages: Messages = defineMessages({
    title: {
        id: 'settings',
    },
    theme: {
        id: 'themes',
    },
    language: {
        id: 'language',
    },
    en: {
        id: 'en',
    },
    fr: {
        id: 'fr',
    },
})

export default messages
