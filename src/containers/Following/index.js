//import liraries
import React, { Component } from 'react'
import { View, Text, StyleSheet } from 'react-native'

// global styles
const Theme = require('../../styles/')

// create a component
const Following = () => {
    return (
        <View style={styles.container}>
            <Text>Following</Text>
        </View>
    )
}

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: Theme.colors.white,
    },
})

//make this component available to the app
export default Following
