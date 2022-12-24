import React from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from './Input.style';

const Input = () => {
    return (
        <View style={styles.container}>
            <View style={styles.text_container}>
                <TextInput
                    placeholder='Yapılacak...'
                    cursorColor='#a0a0a0'
                    selectionColor='#c0c0c0'
                />
            </View>
            <View style={styles.touchOpacity_container}>
                <TouchableOpacity >
                    <Text style={styles.touchOpacity_text}>Kaydet</Text>
                </TouchableOpacity>
            </View>

        </View>
    )

}

export default Input;