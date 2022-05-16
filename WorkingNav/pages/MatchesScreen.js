import React from 'react';
import styles from '../components/styles';

import {
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
  
      <View> backgroundColorPURPLE>
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
    
  );
};

export default MatchesScreen;