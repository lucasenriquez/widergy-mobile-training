import React from 'react';
import { styles } from './styles';
import { useSelector } from 'react-redux';
import { SafeAreaView } from 'react-native-safe-area-context';
import TabBar from '../../components/TabBar';
import HistoryList from '../../components/HistoryList';
import LoadingSpinner from '../../components/LoadingSpinner';

const HistoryScreen = ({ navigation }) => {
    const loading = useSelector(state => state.loading)
    return (
        <SafeAreaView style={styles.historyContainer}>
            {loading ? <LoadingSpinner/> : <HistoryList/>}
            {!loading ? <TabBar navigation={navigation}/> : null}
        </SafeAreaView>
    )
}

export default HistoryScreen;
