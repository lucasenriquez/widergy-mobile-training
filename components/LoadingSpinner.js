import React from "react";
import { ActivityIndicator } from "react-native";
import { SafeAreaView } from "react-native-safe-area-context";

const LoadingSpinner = () => {
    return (
        <SafeAreaView style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color='#0099ff' />
        </SafeAreaView>
    )
}

export default LoadingSpinner;
