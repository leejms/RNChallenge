/**
 * PersonRow
 * 
 * Row item that is rendered in the FollowerList
 */
//import liraries
import React, {Component} from 'react'
import {
  View,
  Text,
  StyleSheet,
  Button,
  TouchableOpacity,
  Image
} from 'react-native'

// import the components that make up a person row
import Avatar from '../../image/Avatar'
import Title from '../../text/RowTitle'
import SubTitle from '../../text/RowSubtitle'

const Theme = require('../../../styles')

// create a component
const PersonRow = ({title, subtitle, avatar, following, follow}) => {
  
  return (
    <View style={styles.container}>
      <Avatar src={avatar}/>
      <View style={styles.textContainer}>
        <Title>{title}</Title>
        <SubTitle>{subtitle}</SubTitle>
      </View>
      <View style={styles.buttonContainer}>
        { //show the follow or unfollow button as needed
          !following
          ? <TouchableOpacity onPress={follow}>
              <View style={styles.followButton}>
                <Image source={require('../../../assets/icon-follow.png')}/>
                <Text style={styles.buttonText}>Follow</Text>
              </View>
            </TouchableOpacity>
          : <Button title='unfollow' onPress={follow}/>
        }
      </View>
    </View>
  )
}

// define your styles
const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'row',
    padding: 15,
    borderBottomColor: Theme.colors.lightGrey,
    borderBottomWidth: 1,
    backgroundColor: Theme.colors.white,
    height: 90
  },
  textContainer: {
    flex: 4,
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    height: 90,
    paddingLeft: 20,
    paddingTop: 5
  },
  buttonContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center'
  },
  followButton: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    width: 96,
    height: 31,
    borderRadius: 2,
    backgroundColor: Theme.colors.deepSkyBlue
  },
  buttonText: {
    color: Theme.colors.white,
    fontSize: 14,
    paddingLeft: 10
  }
})

//make this component available to the app
export default PersonRow
