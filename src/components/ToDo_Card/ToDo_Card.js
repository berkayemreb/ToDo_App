import React from 'react';
import { View, Text } from 'react-native';
import styles from './ToDo_Card.style';

const ToDo_Card = (props) => {

    return (

        <View>
            <Text>{props.data.action}</Text>
        </View>
    )
}

export default ToDo_Card;