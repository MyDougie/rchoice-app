import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { render } from "react-dom";

export default class Write extends React.Component{
    render(){
        return(
            <View>
                <Text>Write</Text>
            </View>
        )
    };
}


const styles = StyleSheet.create({
    header: {
        flex: 0.15,
        backgroundColor: "pink"
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