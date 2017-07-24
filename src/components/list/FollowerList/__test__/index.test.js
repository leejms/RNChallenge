import 'react-native'
import React from 'react'
import Component from '../index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer
    .create(<Component
      followers={[]}
      follow={()=>console.log('follow')}
      />)
    .toJSON()
  expect(tree).toMatchSnapshot()
})