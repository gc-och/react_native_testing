import React, { Component } from 'react';
import { ScrollView, StyleSheet, TouchableWithoutFeedback ,View } from 'react-native';

import { GameRow } from './ui/gameRow';

import { Board } from './functional/board';
import { Initialisation } from './functional/initialisation';

const DATA = require('../resources/data.json');

export class Core extends Component {
    constructor() {
        super();

        this.state = {
            ru: false
        };

        this.init = new Initialisation(DATA);
        this.board = this.init.generateBoard();
    }

    render() {
        var jsx = [], rowName;
        for (i = 1; i <= 100; i++) {
            rowName = "row" + i;
            jsx[i-1] = <GameRow data={this.board.data[rowName]}></GameRow>
        }
        return(
            <View style={styles.boardContainer}>
                <TouchableWithoutFeedback onPress={() => this.test()}>
                    <View style={{height: 50, width: 50, backgroundColor: 'blue'}}></View>
                </TouchableWithoutFeedback>
                <ScrollView horizontal={true}>
                    <ScrollView style={styles.cellContainer}>
                        {jsx}
                    </ScrollView>
                </ScrollView>
            </View>
        );
    }

    test() {
        this.board.changeCell([5, 5], 5);
        this.setState({
            ru: !this.state.ru
        });
    }
}

const styles = StyleSheet.create({
    boardContainer: {
        margin: 10,
        padding: 5,
        backgroundColor: '#ddd'
    },
    button: {
        backgroundColor: 'blue',
        height: 50,
        width: 50
    }
});