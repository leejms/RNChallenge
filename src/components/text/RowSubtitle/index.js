/**
 * RowSubtitle
 *
 * Text style for the secondary text on cells and rows
 * text content is based on children like the standard Text component
 */
//import liraries
import React, {Component} from 'react'
import {View, Text, StyleSheet} from 'react-native'

const Theme = require('../../../styles')

// create a component
const RowSubtitle = ({children}) => {
  return (
    <View style={styles.container}>
      <Text style={Theme.textStyles.subtitleText}>{children}</Text>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({container: {}})

//make this component available to the app
export default RowSubtitle
