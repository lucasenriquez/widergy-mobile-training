import React from "react";
import { ActivityIndicator, StyleSheet, View } from "react-native";

const LoadingSpinner = () => {
    return (
        <View style={{flex: 1, justifyContent: 'center'}}>
            <ActivityIndicator size="large" color='#0099ff' />
        </View>
    )
}

export default LoadingSpinner;
