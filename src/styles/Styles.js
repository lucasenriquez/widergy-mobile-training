import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    container:{
        position: 'absolute',
        bottom: 10,
        alignSelf: 'center'
    },
    text: {
        fontSize: 60,
        color: 'gray',
        fontWeight: '300',
        alignSelf: 'flex-end',
        margin: 10
    },
    btnRows: {
        maxWidth: '100%',
        flexDirection: 'row'
    },
    button: {
        width: 80,
        height: 80,
        borderRadius: 50,
        justifyContent: 'center',
        alignItems: 'center',
        margin: 8
    },
    historyContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    historyText: {
        alignSelf: 'flex-start',
        fontSize: 25
    },
    history: {
        borderBottomColor: '#9e9e9e',
        borderBottomWidth: 1,
        width: '100%'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 10
    },
    clearButton: {
        backgroundColor: '#ff6666',
        borderRadius: 50
    },
    homeButton: {
        backgroundColor: '#7198fc',
        borderRadius: 50
    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20
    }
})
