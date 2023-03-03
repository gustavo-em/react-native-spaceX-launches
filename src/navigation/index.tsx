import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createStackNavigator} from '@react-navigation/stack';
import {Provider} from 'react-redux';
import store from '../store';
import Launches from '../screens/Launches';
import HomeScreen from '../screens/Home';

type RootStackParamList = {
  Home: undefined;
  Launches: undefined;
};

const Stack = createStackNavigator<RootStackParamList>();

export const Router = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator>
          <Stack.Screen name="Home" component={HomeScreen} />
          <Stack.Screen name="Launches" component={Launches} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
