import React from "react";
import { StyleSheet, View, Text } from "react-native";
import { render } from "react-dom";
import * as Font from 'expo-font';
import Loading from "./Loading";


let customFonts = {
    'Dynalight': require('./assets/fonts/Dynalight-Regular.ttf'),
    'Dancing': require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
}



Font.loadAsync({
    Dancing: require('./assets/fonts/DancingScript-VariableFont_wght.ttf'),
    //Dynalight: require('./assets/fonts/Dynalight-Regular.ttf'),

    'Dynalight': {
        uri: require('./assets/fonts/Dynalight-Regular.ttf')
    }
});



export default class Header extends React.Component{
    state = {
        fontsLoaded: false
    };

    async loadFontsAsync(){
        await Font.loadAsync(customFonts);
        this.setState({ fontsLoaded: true });
    }

    componentDidMount(){
        this.loadFontsAsync();
    }

    render(){
        if(this.state.fontsLoaded){
            return(
                <View style={styles.header}>
                    <Text style={styles.text}>Rchoice</Text>
                </View>
            )
        }else{
            return <Loading />
        }
    };
}


const styles = StyleSheet.create({
    header: {
        flex: 0.15,
        backgroundColor: "#ff8533"
    },
    text: {
        flex: 1,
        textAlignVertical: 'center',
        alignSelf: "center",
        fontSize: 35,
        paddingTop: 20,
        //fontFamily: "Dancing",
        fontFamily: "Dynalight"
        
        //justifyContent: "center",
    }
})