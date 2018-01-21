import { commonTheme } from './variables/commonColor'
import { materialTheme } from './variables/material'

export * from './components'

interface Themes {
    [key: string]: any
}

export const themes: Themes = {
    common: commonTheme,
    material: materialTheme,
}
