import React from "react";
import { useSelector } from "react-redux";
import { ScrollView } from "react-native";
import Expression from "./Expression";

const HistoryList = () => {
    const historyArray = useSelector(state => state.history)

    return (
        <ScrollView scrollEnabled={true}>
            {historyArray.map((operation) => {
                return (
                    <Expression key={operation.id} id={operation.id} />
                )
            })}
        </ScrollView>
    )
}

export default HistoryList;
