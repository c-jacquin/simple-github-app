import React, { StatelessComponent } from 'react'
import glamorous from 'glamorous-native'

import { AvatarProps } from './types'

const ImageWrapper = glamorous.view<Partial<AvatarProps>, {}>(
    {
        flex: 1,
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
    },
    ({ small }) => ({
        height: small ? 50 : 250,
    })
)

const Image = glamorous.image<Partial<AvatarProps>, {}>(
    {},
    ({ rounded, small }) => ({
        borderRadius: rounded ? 150 : 0,
        height: small ? 50 : 200,
        width: small ? 50 : 200,
    })
)

const Name = glamorous.text({
    textAlign: 'center',
})

const Avatar: StatelessComponent<AvatarProps> = ({
    source,
    title,
    small,
    rounded,
    rootStyle,
    imageStyle,
    titleStyle,
}) => (
    <ImageWrapper style={rootStyle}>
        <Image
            small={small}
            rounded={rounded}
            source={{ uri: source }}
            style={imageStyle}
        />
        {title && <Name style={titleStyle}>{title}</Name>}
    </ImageWrapper>
)

export default Avatar
