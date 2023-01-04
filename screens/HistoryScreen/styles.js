import { StyleSheet } from 'react-native';

export const styles = StyleSheet.create({
    historyContainer: {
        flex: 1,
        justifyContent: 'space-between'
    },
    historyText: {
        alignSelf: 'flex-start',
        fontSize: 30
    },
    history: {
        borderBottomColor: '#9e9e9e',
        borderBottomWidth: 1,
        width: '100%',
        display: 'flex', 
        alignContent: 'center'
    },
    buttonsContainer: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        bottom: 0
    },
    clearButton: {
        backgroundColor: '#ff6666',
        width: '50%'
    },
    homeButton: {
        backgroundColor: '#a0f7ea',
        width: '50%'
    },
    btnText: {
        textAlign: 'center',
        fontSize: 20,
        padding: 20
    },
    options: {
        display: 'flex',
        flexDirection: 'row',
        justifyContent: 'space-around',
        width: '100%'
    },
    optionsText: {
        fontSize: 20
    }
})
