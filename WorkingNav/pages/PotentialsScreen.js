import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';


class PotentialsScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Potentials</Text>
          <Button
            title="Go to Potentials"
            onPress={() => this.props.navigation.navigate('Login')}
          />
        </View>
      );
    }
}

export default PotentialsScreen;