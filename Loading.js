import React from "react";
import { StyleSheet, Text, View } from 'react-native';

export default function Loading(){
    return (
        <View style={styles.container}>
            <Text style={styles.text}>Loading...</Text>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: 'yellow',
        alignItems: 'center',
        justifyContent: 'flex-end',
        paddingVertical: "30%",
    },
    text:{
        fontSize: 30
    }



});