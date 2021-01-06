import React from 'react';
import { Image, StyleSheet, View } from 'react-native';
import colors from '../config/colors';
import { MaterialCommunityIcons } from '@expo/vector-icons';

const ViewImageScreen = (props) => {
    return (
        <View style={styles.container}>
            <View style={styles.closeIcon}>
                <MaterialCommunityIcons 
                    name="close" 
                    color={colors.quinary} 
                    size={37} 
                />
            </View>
            <View style={styles.deleteIcon}>
                <MaterialCommunityIcons 
                    name="trash-can" 
                    color={colors.quinary} 
                    size={37} 
                />
            </View>
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
        left: 30,
        position: "absolute",
        top:40,         
    },
    container: {
        backgroundColor: colors.primary,
        flex: 1,
    },
    deleteIcon: {
        position: "absolute",
        right: 30,
        top:40, 
    },
    image: {
        width: '100%',
        height: '100%',
    },
})

export default ViewImageScreen;