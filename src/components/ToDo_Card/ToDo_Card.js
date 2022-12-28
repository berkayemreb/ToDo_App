import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import styles from './ToDo_Card.style';

const ToDo_Card = ({ data, completedToDo }) => {

    return (
        <TouchableOpacity
            onPress={() => { completedToDo(data.id) }}>
            <View
                style={data.isDone ? styles.after_completed_container : styles.before_completed_container}>
                <Text style={data.isDone ? styles.after_completed_text : styles.before_completed_text}>{data.action}</Text>
            </View>
        </TouchableOpacity>
    )
}

export default ToDo_Card;
