import React from "react";
import { StyleSheet, View, Text, ScrollView } from "react-native";
import { render } from "react-dom";

export default class Body extends React.Component{
    render(){
        return(
            <ScrollView style={styles.body}>
                <Text style={styles.text}>
                    Body
                </Text>
            </ScrollView>
        )
    };
}


const styles = StyleSheet.create({
    body: {
        flex: 1,
        backgroundColor: "skyblue"
    },
    text: {
        flex: 1,
        textAlignVertical: 'center',
        alignSelf: "center",
        fontSize: 25,
        paddingTop: 20,
        //justifyContent: "center",
    }
})