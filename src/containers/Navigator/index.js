//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { TabNavigator } from 'react-navigation'
//SCREENS
import FollowerSuggestions from '../FollowerSuggestions'
import Following from '../Following'

// create a component
const Navigator = TabNavigator({
  Recommended: {
    screen: FollowerSuggestions,
  },
  Following: {
    screen: Following,
  },
}, {
  tabBarOptions: {
    activeTintColor: '#e91e63',
  },
})

//make this component available to the app
export default Navigator
