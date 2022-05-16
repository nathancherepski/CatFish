import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

class HomeScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Catfish</Text>
          <Button
            title="Login"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      );
    }
}

export default HomeScreen;