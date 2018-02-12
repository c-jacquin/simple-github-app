import { InjectedIntlProps } from 'react-intl'
import { PushSettings } from '../../store/settings/types'

export interface PushFormProps extends InjectedIntlProps {
    data: PushSettings
    onChange: (key: string, value: string) => void
}
