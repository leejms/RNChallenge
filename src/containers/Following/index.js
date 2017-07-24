//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'
import { toggleFollow } from '../../actions'
import _ from 'underscore'
// global styles
const Theme = require('../../styles/')

//components
import FollowerList from '../../components/list/FollowerList'

// pass data from redux down to the components
const mapStateToProps = (state, ownProps) => {
  return {
    followers: _.filter(state.followers, (follower) => follower.following)
  }
}

// map children component actions to redux actions
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    follow: (id) => {
      dispatch(toggleFollow(id))
      console.log('unfollow:', id)
    }
  }
}

//make this component available to the app and access the state and dispatcher from redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowerList)
