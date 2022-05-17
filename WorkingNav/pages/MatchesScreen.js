import React from 'react';
import styles from '../components/styles';

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

const MatchesScreen = () => {
  return (
  
      <View style={backgroundStyles.container}>
      <FlatList
        numColumns={2}
        data={Demo}
        keyExtractor={(item, index) => index.toString()}
        renderItem={({ item }) => (
          <TouchableOpacity>
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
  );
};

export default MatchesScreen;

const backgroundStyles = StyleSheet.create(
  {
     container: { flex: 1, alignItems: 'center', justifyContent: 'space-evenly', backgroundColor: '#9FA8DA'
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