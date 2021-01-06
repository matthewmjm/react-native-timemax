import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colorsConfig from '../config/colorsConfig';

const AppButton = ({title, onPress}) => {
    return (
        <TouchableOpacity style={styles.button} onPress={onPress} >
            <Text style={styles.text}>{title}</Text>
        </TouchableOpacity>
    );
};

const styles = StyleSheet.create({
    button: {
        alignItems: 'center',
        backgroundColor: colorsConfig.tertiary,
        borderRadius: 25,
        justifyContent: 'center',
        padding: 15,
        width: '100%',
    },
    text: {
        color: colorsConfig.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    }
});

export default AppButton;