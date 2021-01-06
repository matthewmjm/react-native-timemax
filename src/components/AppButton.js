import React from 'react';
import { StyleSheet, Text, TouchableOpacity } from 'react-native'
import colorsConfig from '../config/colorsConfig';

const AppButton = ({color = "secondary", onPress, title}) => {
    return (
        <TouchableOpacity 
            style={[styles.button, {backgroundColor: colorsConfig[color]}]} 
            onPress={onPress} 
        >
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
        marginVertical: 6,
    },
    text: {
        color: colorsConfig.white,
        fontSize: 18,
        textTransform: 'uppercase',
        fontWeight: 'bold',
    },
});

export default AppButton;

// title="Login" onPress={() => console.log("pressedTHE appButton!")}