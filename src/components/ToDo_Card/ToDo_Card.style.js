import { StyleSheet } from "react-native";

export default StyleSheet.create({
    before_completed_container: {
        backgroundColor: '#61764B',
        padding: 7,
        marginHorizontal: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#c0c0c0',
        borderRadius: 8
    },
    after_completed_container: {
        backgroundColor: '#393e46',
        padding: 7,
        marginHorizontal: 10,
        margin: 5,
        borderWidth: 1,
        borderColor: '#a0a0a0',
        borderRadius: 8
    },
    before_completed_text: {
        color: '#f0f0f0',
    },
    after_completed_text: {
        color: '#a0a0a0',
        textDecorationLine: 'line-through'
    }
})