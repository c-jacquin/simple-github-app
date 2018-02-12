export interface PushSettings {
    pushEnabled: boolean
    pushCommit: boolean
    pushIssue: boolean
    pushPr: boolean
}

export interface SettingsState {
    theme: string
    pending: boolean
    push: PushSettings
}
