import React, { StatelessComponent } from 'react'
import glamorous from 'glamorous-native'

import { AvatarProps } from './types'

export default glamorous.image<Partial<AvatarProps>, {}>(
    {
        alignSelf: 'center',
    },
    ({ rounded, small }) => ({
        borderRadius: rounded ? 150 : 0,
        height: small ? 50 : 200,
        width: small ? 50 : 200,
    }),
)
