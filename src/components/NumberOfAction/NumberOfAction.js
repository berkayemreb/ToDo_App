import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './NumberOfAction.style';

const NumberOfAction = ({ list }) => {

    const counter = list.length;

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yapılacaklar</Text>
            <Text style={styles.number}>{counter}</Text>
        </View>
    )
}

export default NumberOfAction;