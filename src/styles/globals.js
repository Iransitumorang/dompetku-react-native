/* eslint-disable prettier/prettier */
import {Dimensions, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    wrapper: {
        // flex: 1,
        backgroundColor: 'green',
    },
    header: {
        height: Dimensions.get('screen').height / 4,
        // backgroundColor: 'green',
        justifyContent: 'center',
        alignItems: 'center',
    },
    headerFont: {
        fontSize: 30,
        fontWeight: 'bold',
    },
    article: {
        borderTopLeftRadius: 45,
        borderTopRightRadius: 45,
        flex: 1,
        backgroundColor: 'skyblue',
    },
    content: {
        flex: 1,
        paddingHorizontal: 10,
    },
    mainFont1: {
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        marginVertical: 30,
    },
    mainFont2: {
        fontWeight: '500',
        lineHeight: 25,
        textAlign: 'center',
        fontSize: 18,
        marginBottom: 50,
    },
    buttonLogin: {
        backgroundColor: 'green',
        // width: Dimensions.get('screen').width / 2,
        marginHorizontal: 10,
        marginVertical: 30,
        borderRadius: 10,
    },
    btnLoginText: {
        fontSize: 18,
        paddingVertical: 12,
        textAlign: 'center',
        fontWeight: '700',
    },
    forgotPass: {
        textAlign: 'right',
        marginHorizontal: 18,
        fontSize: 16,
    },
    haveAccount: {
        textAlign: 'center',
        fontSize: 16,
        paddingBottom: 150,
    },
});

export default styles;
