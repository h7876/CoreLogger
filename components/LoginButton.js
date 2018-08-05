import React, { Component } from 'react';
import { Alert, AppRegistry, StyleSheet, Text, TouchableHighlight, View } from 'react-native';
import {
    Actions
} from 'react-native-router-flux';


export default class LoginButton extends Component {

    render(){
        return(
            <View style={styles.container}>
            <TouchableHighlight onPress={()=> {
                        Actions.login({
                        })
                          
                    }} underlayColor="white">
            <View style={styles.button}>
            <Text style={styles.buttonText}>Login</Text>
          </View>
        </TouchableHighlight>
            </View>
        )
    }
}
const styles = StyleSheet.create({
    container: {
      alignItems: 'center',
      justifyContent: 'center',
      paddingTop: 160,
    },
    button: {
      marginBottom: 30,
      width: 150,
      alignItems: 'center',
      backgroundColor: '#2196F3'
    },
    buttonText: {
      padding: 20,
      color: 'white',
      fontFamily: 'roboto',
      fontWeight: '400'
    }
  })
  
  AppRegistry.registerComponent('coreLogger', () => LoginButton);