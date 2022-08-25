/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        flex: 1,
        backgroundColor: 'skyblue',
    },
    header: {
        height: Dimensions.get('screen').width / 3,
        backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerFont: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    content: {
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        flex: 1,
        paddingHorizontal: 10,
    },
    mainFont1: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 20,
    },
    mainFont2: {
        fontWeight: 'bold',
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 30,
    },
});

export default styles;
