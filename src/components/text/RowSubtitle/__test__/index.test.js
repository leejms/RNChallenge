import 'react-native'
import React from 'react'
import RowSubtitle from '../index'

import renderer from 'react-test-renderer'

it('renders correctly', () => {
  const tree = renderer.create(
    <RowSubtitle>Test</RowSubtitle>
    ).toJSON()
  expect(tree).toMatchSnapshot()
})