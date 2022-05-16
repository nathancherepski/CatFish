import React from 'react';
import { StyleSheet, Button, View, Text, TextInput } from 'react-native';
import CoolButton from '../components/CoolButton';

class HomeScreen extends React.Component {
    render() {
      return (
        
        <View style={backgroundStyles.container}>
          <Text style={titleStyles.title}>Catfish</Text>
          <CoolButton styles={buttonStyles.container}
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
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
      marginTop: 50
    },
    text: {
        marginHorizontal: 8,
        marginVertical: 10
    }
    }
  );


const backgroundStyles = StyleSheet.create(
     {
        container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#9FA8DA'
        },

    }
);

const titleStyles = StyleSheet.create(
    {
       title: { flex: 3, alignItems: 'center', justifyContent: "space-evenly", fontSize: 48, fontWeight: 'bold',  textDecorationLine: 'underline'
       },

   }
);

export default HomeScreen;