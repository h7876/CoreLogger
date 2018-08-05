
import React, {Component} from 'react';
import {Platform, StyleSheet, Text, View} from 'react-native';
import LoginButton from './components/LoginButton';
import LoginPage from './components/LoginPage';
import {Router, Scene, Stack} from 'react-native-router-flux';

export default class App extends Component{
  render() {
    return (
  
          <Router>
            <Scene key="root" navigationBarStyle={styles.navigationBar} titleStyle={styles.navBarTitle}>
            <Scene key="home" component={LoginButton} title="Welcome" style={styles.container}/>
            <Scene key="login" component={LoginPage} title="Login" back="true"/>  
            </Scene>
          </Router>

    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  navigationBar: {
    backgroundColor: '#000000',
    height: 40
  },
  navBarTitle: {
    color: '#ffffff',
    fontSize: 21,
    fontFamily: 'Roboto',
    fontWeight: '300'

    },
  
});
