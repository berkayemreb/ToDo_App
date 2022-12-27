import React from 'react';
import { View, Text } from 'react-native';
import styles from './NumberOfAction.style';

const NumberOfAction = () => {
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Yapılacaklar</Text>
            <Text style={styles.number}>0</Text>
        </View>
    )
}

export default NumberOfAction;