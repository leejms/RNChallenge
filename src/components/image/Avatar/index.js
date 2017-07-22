//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// create a component
const Avatar = () => {
    return (
        <View style={styles.container}>
            <Text>Avatar</Text>
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
