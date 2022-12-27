import React from 'react';
import { View, Text } from 'react-native';
import styles from './ToDo_Card.style';

const ToDo_Card = ({ data }) => {

    return (

        <View style={styles.container}>
            <Text style={styles.text}>{data.action}</Text>
        </View>
    )
}

export default ToDo_Card;