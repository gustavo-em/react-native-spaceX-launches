import React from 'react';
import {View, Text, StyleSheet} from 'react-native';
import {Launch} from '../../../models/launches';

interface LaunchItemProps {
  launch: Launch;
}

const LaunchItem: React.FC<LaunchItemProps> = ({launch}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.name}>{launch.name}</Text>
      <Text style={styles.date}>
        {new Date(launch.date_utc).toLocaleDateString()}
      </Text>
      <Text style={styles.details}>{launch.details}</Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    marginVertical: 8,
    marginHorizontal: 16,
    padding: 16,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  name: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 8,
  },
  date: {
    fontSize: 16,
    marginBottom: 8,
  },
  details: {
    fontSize: 16,
  },
});

export default LaunchItem;
