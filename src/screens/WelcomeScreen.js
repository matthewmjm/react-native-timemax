import React from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import colorsConfig from '../config/colorsConfig';

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            style={styles.background}
            source={require('../assets/landing.jpg')}
        >
            <View style={styles.logoContainer}>
                <Image 
                    style={styles.logo} 
                    source={require('../assets/icon-logo.jpg')} 
                />
                <Text style={styles.landingText}>TIME MAXIMIZER</Text>
            </View>
            <View style={styles.loginButton}></View>
            <View style={styles.registerButton}></View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    loginButton: {
        backgroundColor: '#101D42',
        height: 75,
        width: '100%',
    },
    logo: {
        height: 100,
        width: 100,
    },
    logoContainer: {
        position: 'absolute',
        top: 100,
    },
    registerButton: {
        backgroundColor: '#0D1317',
        height: 75,
        width: '100%',
    },
    landingText: {
        color: colorsConfig.primary,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Futura',
        fontSize: 40,
        fontWeight: 'bold',
    },
})

export default WelcomeScreen;