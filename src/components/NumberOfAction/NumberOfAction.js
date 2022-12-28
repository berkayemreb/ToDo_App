import React, { useState } from 'react';
import { View, Text } from 'react-native';
import styles from './NumberOfAction.style';

const NumberOfAction = ({ list }) => {

    const filterList = list.filter(element => { return !element.isDone }
    )

    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yapılacaklar</Text>
            <Text style={styles.number}>{filterList.length}</Text>
        </View>
    )
}

export default NumberOfAction;