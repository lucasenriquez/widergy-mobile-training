import React from "react";
import { SafeAreaView } from "react-native-safe-area-context";
import { useSelector } from "react-redux";
import LoadingSpinner from "../../components/LoadingSpinner";
import PollForm from "../../components/PollForm";

const PollScreen = ({ navigation }) => {
    const loading = useSelector(state => state.history.loading || state.forms.loading)
    return (
        <SafeAreaView>
            {loading ? <LoadingSpinner/> : <PollForm navigation={navigation}/>}
        </SafeAreaView>
    )
}

export default PollScreen;