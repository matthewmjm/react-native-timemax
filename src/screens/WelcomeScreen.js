import React from 'react';
import { Image, ImageBackground, Platform, StyleSheet, Text, View } from 'react-native';
import colorsConfig from '../config/colorsConfig';
import AppButton from '../components/AppButton';

const WelcomeScreen = (props) => {
    return (
        <ImageBackground
            blurRadius={2}
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
            <View style={styles.buttonsContainer}>
                <AppButton title="Login" ></AppButton>
                <AppButton title="Register" color="quaternary" ></AppButton>
            </View>
        </ImageBackground>
    );
};

const styles = StyleSheet.create({
    background: {
        alignItems: 'center',
        flex: 1,
        justifyContent: 'flex-end',
    },
    buttonsContainer: {
        padding: 20,
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
    landingText: {
        color: colorsConfig.primary,
        fontFamily: Platform.OS === 'android' ? 'Roboto' : 'Futura',
        fontSize: 40,
        fontWeight: 'bold',
    },
})

export default WelcomeScreen;