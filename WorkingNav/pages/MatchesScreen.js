import React from 'react';
import styles from '../components/styles';
import PotentialsButton from '../components/PotentialsButton';

import {
  StyleSheet,
  ScrollView,
  View,
  Text,
  TouchableOpacity,
  ImageBackground,
  FlatList
} from 'react-native';
import CardItem from '../components/cards';
import Icon from '../components/icons';
import Demo from '../demo.js';

class MatchesScreen extends React.Component{
  render () {
  return (
    <View style={anotherBackground.container}>
      <Button title= "Explore People Near You" onPress={() => this.props.navigation.navigate('Potentials')}/>
      <View style={backgroundStyles.container}>
      <FlatList
        numColumns={2}
        data={Demo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity onPress={() => this.props.navigation.navigate('Messages', {
            image: item.image,
            name: item.name,
            status: item.status,
            description: item.description,
            messages: item.messages,
            messageCount: item.messageCount
          })}>
            <CardItem
              image={item.image}
              name={item.name}
              status={item.status}
              variant
            />
          </TouchableOpacity>
        )}
      />
    </View>
    </View>
  );
        }
};

export default MatchesScreen;

const anotherBackground = StyleSheet.create(
  {
    container: { 
      flex: 1, 
      alignItems: 'center',
      backgroundColor: '#A083B6',
      borderWidth: 3,
      borderColor: "thistle",
    },

 }
);

const backgroundStyles = StyleSheet.create(
  {
     container: { flex: 25, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#9FA8DA'
     },
     image1: {
       flex: 2,
       width: 230,
       height: 250,
       marginTop: -50,
       marginLeft: 0
     },

 }
);