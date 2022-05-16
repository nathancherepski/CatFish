import * as React from 'react';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import HomeScreen from './pages/HomeScreen';
import LoginScreen from './pages/LoginScreen';
import MatchesScreen from './pages/MatchesScreen';
import PotentialsScreen from './pages/PotentialsScreen';


const Stack = createNativeStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Home">
        <Stack.Screen name="Home" component={HomeScreen} />
        <Stack.Screen name="Login" component={LoginScreen} />
        <Stack.Screen name="Matches" component={MatchesScreen} />
        <Stack.Screen name="Potentials" component={PotentialsScreen} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;