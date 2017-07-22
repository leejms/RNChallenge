//import liraries
import React, { Component } from 'react';
import { View, Text, StyleSheet } from 'react-native';

// import the components that make up a person row
import Avatar from '../../image/Avatar'
import Title from '../../text/RowTitle'
import SubTitle from '../../text/RowSubtitle'

const Theme = require('../../../styles')

// create a component
const PersonRow = ({title, subtitle}) => {
    return (
        <View style={styles.container}>
            <Avatar/>
            <View style={styles.textContainer}>
                <Title>{title}</Title>
                <SubTitle>{subtitle}</SubTitle>
            </View>
        </View>
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: 'row'
    },
    textContainer: {
        flex: 4,
        justifyContent: 'flex-start',
        alignItems: 'flex-start',
        backgroundColor: Theme.colors.white,
        height: 90
    },
});

//make this component available to the app
export default PersonRow;
