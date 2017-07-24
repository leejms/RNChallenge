import 'react-native'
import React from 'react'
import Component from '../index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Component
      avatar='https://www.planwallpaper.com/static/images/9-credit-1.jpg'
      title='TEST'
      subtitle='test'
      following={true}
      follow={() => console.log(item.id)}/>)
    .toJSON()
  expect(tree).toMatchSnapshot()
})