import React from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import CoolButton from '../components/CoolButton';
import ImageLoader from "../components/ImageLoader";

class HomeScreen extends React.Component {
    render() {
      return (
        
        <View style={backgroundStyles.container}>
          <Text style={titleStyles.title}>Catfish</Text>
          <View style={anotherBackground.container}>
            <CoolButton styles={buttonStyles.container}
              title="Login"
              onPress={() => this.props.navigation.navigate('Login')}
            />
            <ImageLoader
              source={require("../assets/catfishlogo.png")}
              resizeMode="contain"
              style={backgroundStyles.image1}
            />
          </View>
        </View>
      );
    }
}



const buttonStyles = StyleSheet.create({
    container: {
      flex: 1,
      alignItems: 'center'
    },
    image: {
      marginTop: 100
    },
    text: {
        marginHorizontal: 0,
        marginVertical: 40
    }
    }
  );


const backgroundStyles = StyleSheet.create(
     {
        container: { 
          flex: 1, 
          alignItems: 'center', 
          justifyContent: 'space-evenly', 
          backgroundColor: '#9FA8DA'
        },
        image1: {
          flex: 4,
          width: 230,
          height: 250,
          marginTop: -50,
          marginLeft: 0
        },

    }
);

const anotherBackground = StyleSheet.create(
  {
    container: { 
      flex: 4, 
      alignItems: 'center', 
      justifyContent: 'space-evenly', 
      backgroundColor: '#A083B6',
      borderWidth: 3,
      borderColor: "thistle",
    },

 }
);

const titleStyles = StyleSheet.create(
    {
      title: { 
        flex: 2, 
        alignItems: 'center', 
        justifyContent: "space-evenly", 
        color: 'magenta', 
        fontSize: 96, 
        fontStyle: 'italic', 
        fontWeight: 'bold', 
        backgroundColor: '#A083B6',
        borderWidth: 3,
        borderColor: "thistle",
    }
  }

   
);

export default HomeScreen;