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
 
class SignUpScreen extends React.Component {

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
        <View style={extra.inputView}><Text> Sign Up Below </Text></View>
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
    
        <TouchableOpacity onPress={() => {
            this.props.navigation.navigate('Matches');
          
        }} style={styles.loginBtn}>
            <Text style={styles.loginText}>Sign Up Account</Text>
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
    width: 350,
    height: 380,
    marginTop: 20,
    marginLeft: 0,
    resizeMode:"contain"
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
    width: 225,
    height: "70%",
    flex: 1,
    padding: 10,
    marginLeft: 0,
    alignItems: "center",
  },
 
  forgot_button: {
    height: 30,
    marginBottom: 30,
  },
 
  loginBtn: {
    flex: 2,
    width: "80%",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 80,
    backgroundColor: "#A083B6"
  },
});


const extra = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "#9FA8DA",
      alignItems: "center",
      justifyContent: "center",
    },
    image1: {
      flex: 4,
      width: 350,
      height: 380,
      marginTop: 150,
      marginLeft: 0,
      resizeMode:"contain"
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
      width: 225,
      height: "70%",
      flex: 1,
      padding: 10,
      marginLeft: 0,
      alignItems: "center",
    },
   
    forgot_button: {
      height: 30,
      marginBottom: 30,
    },
   
    loginBtn: {
      flex: 3,
      width: "80%",
      borderRadius: 25,
      height: 50,
      alignItems: "center",
      justifyContent: "center",
      marginTop: 10,
      backgroundColor: "#A083B6",
    },
  });
  
  



export default SignUpScreen;