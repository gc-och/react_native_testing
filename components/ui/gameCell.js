import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

const BUILDING_DATA = require('../../resources/buildingTypes.json');

export class GameCell extends Component {
    constructor() {
        super();

        this.state = {
            background: BUILDING_DATA[this.props.data]["appearance"]
        };
    }
    render() {
        var background = {backgroundColor: this.state.background};
        return(
            <TouchableWithoutFeedback onPress={this.handleTouch}>
                <View style={[styles.gameCell, background]}></View>
            </TouchableWithoutFeedback>
        );
    }

    handleTouch() {
        this.setState({
            background: 'red'
        })
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