import React, { Component } from 'react';
import { StyleSheet, Text, View } from 'react-native';

export class GameCell extends Component {
    render() {
        var background = {};
        switch (this.props.data) {
            case 0:
                background = {backgroundColor: 'red'};
                break;
            case 5:
                background = {backgroundColor: 'blue'};
                break;
        }
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