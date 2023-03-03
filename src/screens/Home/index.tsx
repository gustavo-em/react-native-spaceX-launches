import React from 'react';
import {View, Text, Button} from 'react-native';
import {useNavigation} from '@react-navigation/native';

const HomeScreen = () => {
  const navigation = useNavigation();

  const handleNavigation = () => {
    navigation.navigate('Launches', {});
  };

  return (
    <View>
      <Button title="Go to Launches" onPress={handleNavigation} />
    </View>
  );
};

export default HomeScreen;
