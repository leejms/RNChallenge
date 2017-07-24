/**
 * Navigator
 *
 * This is not part of the challenge, but is a demo utility instead
 * the 2nd screen allows you to toggle a person back to the suggested list
 */
//import liraries
import React, {Component} from 'react'
import {View, Text, StyleSheet, Button} from 'react-native'
import {StackNavigator} from 'react-navigation'
//SCREENS
import FollowerSuggestions from '../FollowerSuggestions'
import Following from '../Following'
const Theme = require('../../styles')
// create a component
const Navigator = StackNavigator({
  Recommended: {
    screen: FollowerSuggestions,
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: 'ResearchGate Challenge',
      // Render a button on the right side of the header. When pressed switches the
      // screen to edit mode.
      headerRight: (<Button title='Edit' onPress={() => navigation.navigate('Following')}/>),
      headerStyle: {
        backgroundColor: Theme.colors.white
      }

    })
  },
  Following: {
    screen: Following,
    // Optional: Override the `navigationOptions` for the screen
    navigationOptions: ({navigation}) => ({
      title: 'Following',
      // Render a button on the right side of the header. When pressed switches the
      // screen to edit mode.
      headerRight: (<Button title='Edit' onPress={() => navigation.navigate('Following')}/>),
      headerStyle: {
        backgroundColor: Theme.colors.white
      }

    })

  }
})

//make this component available to the app
export default Navigator
