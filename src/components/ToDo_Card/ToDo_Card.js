import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ToDo_Card.style';

const ToDo_Card = ({ data, completedToDo }) => {

    return (
        <TouchableOpacity
            onPress={() => { completedToDo(data.id) }}>
            <View
                style={styles.container}>
                <Text style={styles.text}>{data.action}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ToDo_Card;