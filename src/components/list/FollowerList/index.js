//import liraries
import React, {Component} from 'react';
import {View, Text, FlatList, StyleSheet} from 'react-native';

// import row component to show each item on this list
import PersonRow from '../../row/PersonRow'

// create a component
const FollowerList = ({recommended}) => {

     renderItem = ({item}) => (
        <PersonRow
          avatar={item.image}
          title={item.name}
          subtitle={item.description}
        />
     )

    keyExtractor = (item, index) => item.id
    
    return (
      <FlatList
        data={recommended}
        //extraData={this.state}
        keyExtractor={this.keyExtractor}
        renderItem={this.renderItem}
      />
    );
};

// define your styles
const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: '#2c3e50'
    }
});

//make this component available to the app
export default FollowerList;
