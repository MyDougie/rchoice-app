import React from "react";
import { StyleSheet, Text, View } from 'react-native';
import { HashRouter, Route, Link } from "react-router-dom";
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from "./Home";
//import Best from "./Best";
//import Write from "./Write";
import My from "./My";


export default class Footer extends React.Component{

    render(){
        return (
            <Text>hhasdasdasdi</Text>
               
                        /* <Link to="/"><View style={styles.footerButton}><Text>Home</Text></View></Link>
                        <Link to="/best"><View style={styles.footerButton}><Text>Best</Text></View></Link>
                        <Link to="/write"><View style={styles.footerButton}><Text>Write</Text></View></Link>
                        <Link to="/my"><View style={styles.footerButton}><Text>My</Text></View></Link>
                        <Route path="/" exact={true} component={Home}></Route>
                        <Route path="/best" component={Best}></Route>
                        <Route path="/write" component={Write}></Route>
                        <Route path="/my" component={My}></Route> */
            
        )
    };
}

const styles = StyleSheet.create({
    

    
});