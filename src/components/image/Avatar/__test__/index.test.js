import 'react-native'
import React from 'react'
import Component from '../index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(
    <Component
      src='https://www.planwallpaper.com/static/images/9-credit-1.jpg'
      />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})