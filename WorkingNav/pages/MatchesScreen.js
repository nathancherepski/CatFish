import React from 'react';
import { Button, View, Text, TextInput } from 'react-native';

class MatchesScreen extends React.Component {
    render() {
      return (
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
          <Text>Matches Screen </Text>
          <Button
            title="Go to Potentials"
            onPress={() => this.props.navigation.navigate('Potentials')}
          />
        </View>
      );
    }
}

export default MatchesScreen;