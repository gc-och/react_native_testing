import React, { Component } from 'react';
import { View } from 'react-native';

import { GameCell } from './gameCell';

export class GameRow extends Component {
    render() {
        var jsx = [];
        for (i = 0; i < 100; i++) {
            jsx[i] = <GameCell data={this.props.data[i]}></GameCell>;
        }

        return(
            <View style={{flexDirection: 'row'}}>
                {jsx}
            </View>
        );
    }
}