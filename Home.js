import React from "react";
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import MaterialIcons from 'react-native-vector-icons/MaterialIcons';
import Header from "./Header";
import Body from "./Body";
import Footer from "./Footer";

const Tab = createBottomTabNavigator();

function Best(){
    return (
        <View style={{flex: 1, backgroundColor: "orange"}}>
            <Text>Best</Text>
        </View>
    );
}

function Write(){
    return (
        <View style={{flex: 1, backgroundColor: "orange"}}>
            <Text>Write</Text>
        </View>
    );
}

function My(){
    return (
        <View style={{flex: 1, backgroundColor: "orange"}}>
            <Text>My</Text>
        </View>
    );
}



export default function Home(){
    return (
        <View style={{flex:1}}>
            {/* <Header /> */}
            <Tab.Navigator 
                initialRouteName="Home"
                tabBarOptions={{
                    activeTintColor: '#e91e63',
                }}
            >
                <Tab.Screen 
                    name="Home" 
                    component={Header}
                    options={{
                        tabBarLabel: 'Home',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="home" colo={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Best" 
                    component={Best}
                    options={{
                        tabBarLabel: 'Best',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="star" colo={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="Write" 
                    component={Write}
                    options={{
                        tabBarLabel: 'Write',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialCommunityIcons name="pencil" colo={color} size={size} />
                        ),
                    }}
                />
                <Tab.Screen 
                    name="My" 
                    component={My}
                    options={{
                        tabBarLabel: 'My',
                        tabBarIcon: ({ color, size }) => (
                            <MaterialIcons name="person" colo={color} size={size} />
                        ),
                    }}
                />

            </Tab.Navigator>
        </View>
    );
}




const styles = StyleSheet.create({
    
    container: {
        flex: 1,
        backgroundColor: "skyblue"
    },
    footer : {
        flex: 0.1,
        flexDirection: "row",
        backgroundColor: "yellow",
    },
    footerButton: {
        flex: 1,
        flexDirection: "column",
        justifyContent: "center",
        alignItems: "center"
    }, 
});