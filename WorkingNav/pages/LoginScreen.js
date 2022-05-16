import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

function checkCredentials(username, password){
    /*
    try {
      const results = db.checkCreds(username, password);
      
      if(results != err && results != null)
      {
        return true;
      }
    }catch(err)
    {
      return false;
    }
    */
    return true;
  
     // database code here
     
  }

class LoginScreen extends React.Component {
    constructor (props) {
      super(props);
      this.state={
          email:'',
          password:''
      }
      this.trylogin = this.trylogin.bind(this); // you need this to be able to access state from login
    }
  
    trylogin() {
      if(checkCredentials(this.state.username, this.state.password)){
        console.log('your username is', this.state.username);
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
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Enter your username and pasword below.</Text>
          <TextInput style={{height: 40}} placeholder="username" defaultValue={''} id="username" onChangeText={ (username) => {
      this.setState({username})}}></TextInput>
          <TextInput secureTextEntry={true} style={{height: 40}} placeholder="password" defaultValue={''} id="password" onChangeText={(password) => {
      this.setState({password})}}></TextInput>
          <Button
            title="Login"
            onPress={() => {
              if(this.trylogin() == true){
                this.props.navigation.push('Matches')
                
              }
            }
          }
          />
        </View>
      );
    }
  }

export default LoginScreen;