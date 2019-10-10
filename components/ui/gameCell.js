import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BUILDING_DATA = require('../../resources/buildingTypes.json');

export class GameCell extends Component {
    render() {
        var background = {backgroundColor: BUILDING_DATA[this.props.data]};
        return(
            <View style={[styles.gameCell, background]}></View>
        );
    }
}

const styles = StyleSheet.create({
    gameCell: {
        height: 10,
        width: 10,
        borderColor: 'black',
        borderWidth: 0.5
    }
});