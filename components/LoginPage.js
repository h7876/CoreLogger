import React, {Component} from 'react';
import {TextInput, StyleSheet, Text,  View } from 'react-native';
import {
    Actions
} from 'react-native-router-flux';

export default class LoginPage extends Component {
    state = {
        username: '',
        password: ''
    }

    render(){
        return(
            <View style={styles.container}>
    
                 <TextInput
                    style={styles.nameInput}
                    placeholder="Email"
                    paddingLeft={10}
                    onChangeText={(text)=> {
                        this.setState({Email: text})
                    }}
                    value={this.state.username}
                    />
                    <TextInput
                    style={styles.passwordInput}
                    placeholder="Password"
                    paddingLeft={10}
                    onChangeText={(text)=> {
                        this.setState({password: text})
                    }}
                    value={this.state.passwordf}
                    secureTextEntry={true}
                    />
            </View>
        )
    }
}

const styles = StyleSheet.create({
    container: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#F5FCFF',
      paddingBottom: 210
    },

   
    nameInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        margin: 5,
        
    },
    passwordInput: {
        height: 40,
        borderWidth: 1,
        borderColor: 'black',
        width: 200,
        margin: 5,
    }
  });