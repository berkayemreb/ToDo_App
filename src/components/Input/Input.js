import React, { useState } from 'react';
import { TextInput, View, TouchableOpacity, Text } from 'react-native';
import styles from './Input.style';


const Input = ({ toDo, setToDo, addToDo, isActiveBtn, setIsActiveBtn }) => {

    const changeText = text => {
        setToDo(text)
        text !== '' ? setIsActiveBtn(true) : setIsActiveBtn(false);
    }

    return (
        <View style={styles.container}>

            <TextInput
                placeholder='Yapılacak...'
                cursorColor='#a0a0a0'
                selectionColor='#c0c0c0'
                onChangeText={changeText}
                style={styles.text_container}
                value={toDo}
            />

            <TouchableOpacity
                onPress={addToDo}
                style={isActiveBtn ? styles.active_button : styles.normal_button}>
                <Text style={styles.btn_text}>Kaydet</Text>
            </TouchableOpacity>


        </View>
    )

}

export default Input;