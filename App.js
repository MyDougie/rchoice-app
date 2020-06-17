import 'react-native-gesture-handler';
import React from 'react';
import { StyleSheet, Text, View } from 'react-native';
import Home from "./Home";
import Loading from './Loading';
import { NavigationContainer } from '@react-navigation/native';

export default class App extends React.Component {
  
  state = {
    isLoading: true
  };

  componentDidMount(){
    console.log("App123 componentDidMount.");
    this.setState({ isLoading: false});
  }
  
  render(){
    const { isLoading } = this.state;

    return (
      isLoading ? <Loading /> : 
        (
          <NavigationContainer>
              <Home />
          </NavigationContainer>
        )
      )
  };
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});
