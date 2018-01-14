import React from 'react'
import 'react-native'
import renderer from 'react-test-renderer'

import Avatar from '../index'

it('renders correctly', () => {
    const tree = renderer.create(<Avatar />)
    expect(tree).toBeDefined()
})
