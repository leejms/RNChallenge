import 'react-native'
import React from 'react'
import RowTitle from '../index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <RowTitle>Test</RowTitle>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})