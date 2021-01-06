import { Platform } from 'react-native';
import colorsConfig from './colorsConfig';

export default {
    colorsConfig,
    text: {
        color: colorsConfig.danger,
        fontSize: 18,
        fontFamily: Platform.OS === 'android' ? 'San Francisco' : 'Avenir',
    },
};