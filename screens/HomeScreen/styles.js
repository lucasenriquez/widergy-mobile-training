import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center',
        maxHeight: '99%',
        display: 'flex',
        flexDirection: 'column'
    },
    text: {
        fontSize: 60,
        color: 'gray',
        fontWeight: '300',
        alignSelf: 'flex-end',
        margin: 10
    },
    input:{
        maxHeight: '100%',
        borderBottomColor: 'gray',
        borderBottomWidth: 1
    },
    btnRows: {
        maxWidth: '100%',
        flexDirection: 'row'
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 10,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8,
        backgroundColor: 'white'
    }
})
