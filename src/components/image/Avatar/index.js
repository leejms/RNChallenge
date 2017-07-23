//import liraries
import React, { Component } from 'react';
import { View, Image, StyleSheet } from 'react-native';

// create a component
const Avatar = ({src}) => {
    return (
        <View style={styles.container}>
            <Image source={{uri:src}}/>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        width: 60,
        height: 60
    },
});

//make this component available to the app
export default Avatar;
