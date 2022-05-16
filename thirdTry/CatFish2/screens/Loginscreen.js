import React, { Component } from "react";
import {
  StyleSheet,
  View,
  StatusBar,
  TextInput,
  Text,
  Animated
} from "react-native";
import MaterialButtonDanger from "../assets/components/MaterialButtonDanger";
import MaterialButtonSuccess from "../assets/components/MaterialButtonSuccess";

function Loginscreen(props) {

  class ImageLoader extends Component {
    state = {
      opacity: new Animated.Value(0),
    }
  
    onLoad = () => {
      Animated.timing(this.state.opacity, {
        toValue: 1,
        duration: 1000,
        useNativeDriver: true,
      }).start();
    }
  
    render() {
      return (
        <Animated.Image
          onLoad={this.onLoad}
          {...this.props}
          style={[
            {
              opacity: this.state.opacity,
              transform: [
                {
                  scale: this.state.opacity.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.85, 1],
                  })
                },
              ],
            },
            this.props.style,
          ]}
        />
      );
    }
  }//end ImageLoader

  return (
 <View>
  <StatusBar backgroundColor="rgba(0,0,0,1)" />
  <View style={styles.padHorizontal}>
  <TextInput
      placeholder="email ID"
      inlineImagePadding={10}
      keyboardType="email-address"
      style={styles.txtEmail}
    ></TextInput>
    </View>
    <View style={styles.padHorizontal}>        
    
    <TextInput
      placeholder="password"
      secureTextEntry={true}
      inlineImagePadding={10}
      style={styles.txtPassword}
    ></TextInput>
    
    </View>
  <View style={styles.padHorizontal}>    
  <ImageLoader
      source={require("../assets/catfishlogo.png")}
      resizeMode="contain"
      style={styles.image1}
    />
  </View>
  <View style={styles.padHorizontal}>
  <MaterialButtonDanger        
      caption="Login"
      style={styles.btnLogin}
      navigation={props.navigation}      
    ></MaterialButtonDanger>
    <Text style={styles.or13}>or</Text>
  </View>

<View style={styles.padHorizontal}>
<MaterialButtonSuccess
      caption="Sign Up"
      style={styles.materialButtonSuccess}
    ></MaterialButtonSuccess>
</View>
    
</View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(197,188,171,1)",
  },
  txtEmail: {
    fontFamily: "trebuchet-ms-regular",    
    color: "#121212",
    height: 56,
    fontSize: 20,    
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(135,29,29,1)",
    borderStyle: "solid",
    borderRadius: 30,
    width: '100%',
    backgroundColor: "rgba(237,220,202,1)",    
    marginTop: 239
  },  
  txtPassword: {
    fontFamily: "trebuchet-ms-regular",
    color: "#121212",
    height: 56,
    width: '100%',    
    fontSize: 20,
    textAlign: "center",
    borderWidth: 2,
    borderColor: "rgba(135,29,29,1)",
    borderStyle: "solid",
    borderRadius: 30,
    backgroundColor: "rgba(237,220,202,1)",
     marginTop: 14,
     
    // marginLeft: 19
  }, 
  image1: {
    width: 196,
    height: 203,
    marginTop: -349,
    marginLeft: 82
  },
  btnLogin: {
    height: 59,
    width: '50%',
    borderRadius: 30,
    marginTop: 24,
    alignSelf:'center'
  },
  padHorizontal:{
    paddingHorizontal:10,
  },
  or13: {
    fontFamily: "trebuchet-ms-regular",
    color: "#121212",
    fontSize: 25,
    marginTop: 15,
    alignSelf:'center'
  },  
  materialButtonSuccess: {
    height: 59,
    width: '50%',
    borderRadius: 30,
    marginTop: 15,
    alignSelf: "center",    

  }
});

export default Loginscreen;
