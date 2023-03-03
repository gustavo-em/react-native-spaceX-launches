import React from 'react';
import {FlatList} from 'react-native';
import {Launch} from '../../../models/launches';
import LaunchItem from './LaunchItem';

const LaunchList = ({launches}: {launches: Launch[]}) => {
  const renderItem = ({item}: {item: Launch}) => <LaunchItem launch={item} />;

  return (
    <>
      <FlatList
        data={launches}
        renderItem={renderItem}
        keyExtractor={item => item.id}
      />
    </>
  );
};

export default LaunchList;
