/**
 * Avatar
 *
 * Avatar component to render a round image from the user data
 *
 */
//import liraries
import React, {Component} from 'react'
import {View, Image, StyleSheet} from 'react-native'

const urlPrefix = 'https://s3-us-west-2.amazonaws.com/rgchallenge/'

// create a component
const Avatar = ({src}) => {
  return (
    <View style={styles.container}>
      <Image style={styles.image} source={{
        uri: src
      }}/>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 60,
    height: 60
  },
  image: {
    width: 60,
    height: 60,
    borderRadius: 30
  }
})

//make this component available to the app
export default Avatar
