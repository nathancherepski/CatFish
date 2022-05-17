import { StatusBar } from "expo-status-bar";
import React, { useState } from "react";
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  Button,
  TouchableOpacity,
} from "react-native";



let users = [
    "natecherepski",
    "omar",
    "benny"
    
]

let passwords = [
    "four",
    "told",
    "me",
]

function checkCredentials(username, password)
{
  var check = false;

  for(var count in users)
  {
    if(users[count] == username && passwords[count] == password)
    {
      check = true;
    }
  }

  return check;
}
 
class LoginScreen extends React.Component {

    constructor (props) {
        super(props);
        this.state={
            username:'',
            password:''
        }
        this.trylogin = this.trylogin.bind(this); // you need this to be able to access state from login
      }

      
    
      trylogin() {
        var lower = this.state.username.toLowerCase();
        if(checkCredentials(lower, this.state.password)){
          console.log('your username is', lower);
          console.log('your password is', this.state.password);
          return true;
        }
        else
        {
          console.log('invalid login');
          return false;
        }
        
      }
  render() {
    return (
        <View style={styles.container}>
        <Image style={styles.image1} source={require("../assets/catfishlogo.png")} />
    
        <StatusBar style="auto" />
        <View style={styles.inputView}>
            <TextInput
            id = "username"
            style={styles.TextInput}
            placeholder="Username"
            placeholderTextColor="#003f5c"
            onChangeText={ (username) => {
                this.setState({username})
            }}
            />
        </View>
    
        <View style={styles.inputView}>
            <TextInput
            id = "password"
            style={styles.TextInput}
            placeholder="Password"
            placeholderTextColor="#003f5c"
            secureTextEntry={true}
            onChangeText={ (password) => {
                this.setState({password})
            }}
            />
        </View>
    
        <TouchableOpacity>
            <Text style={styles.forgot_button}>Forgot Password?</Text>
        </TouchableOpacity>
    
        <TouchableOpacity onPress={() => {
          if(this.trylogin() == true) {
            this.props.navigation.navigate('Matches');
          }
          else
          {
            // send alert
            console.log("invalid password");
          }
        }} style={styles.loginBtn}>
            <Text style={styles.loginText}>LOGIN</Text>
        </TouchableOpacity>
        </View>
    );
    }
}
 
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#9FA8DA",
    alignItems: "center",
    justifyContent: "center",
  },
  image1: {
    flex: 4,
    width: 250,
    height: 275,
    marginTop: 0,
    marginLeft: 0
},
  inputView: {
    backgroundColor: "#A083B6",
    borderRadius: 30,
    width: "70%",
    height: 45,
    marginBottom: 20,
 
    alignItems: "center",
  },
 
  TextInput: {
    height: 50,
    flex: 1,
    padding: 10,
    marginLeft: 20,
    alignItems: "center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    backgroundColor: "#A083B6",
  },
});

export default LoginScreen;