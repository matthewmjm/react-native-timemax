import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colorsConfig from '../config/colorsConfig';

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}></View>
            <View style={styles.deleteIcon}></View>
            <Image 
                resizeMode="contain" 
                style={styles.image}
                source={require('../assets/background.jpg')} 
            />
        </View>
    );
};

const styles = StyleSheet.create({
    closeIcon: {
        backgroundColor: colorsConfig.tertiary,
        height: 50,
        left: 30,
        position: "absolute",
        top:40, 
        width: 50,        
        shadowColor: "grey",
        shadowOffset: { width: 5, height: 5},
        shadowOpacity: .5,
    },
    container: {
        backgroundColor: colorsConfig.primary,
        flex: 1,
    },
    deleteIcon: {
        backgroundColor: colorsConfig.quaternary,
        height: 50,
        position: "absolute",
        right: 30,
        top:40, 
        width: 50,
        shadowColor: "grey",
        shadowOffset: { width: 5, height: 5},
        shadowOpacity: .5,
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

export default ViewImageScreen;