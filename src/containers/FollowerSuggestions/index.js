//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { connect } from 'react-redux'

// global styles
const Theme = require('../../styles/')

//components
import FollowerList from '../../components/list/FollowerList'

// pass data from redux down to the components
const mapStateToProps = (state, ownProps) => {
  return {
    recommended: state.followers
  }
}

// map children component actions to redux actions
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    onClick: () => {
      dispatch(setVisibilityFilter(ownProps.filter))
    }
  }
}

//make this component available to the app and access the state and dispatcher from redux
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FollowerList)
