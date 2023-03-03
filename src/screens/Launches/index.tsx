import React, {useEffect} from 'react';
import {View, ViewStyle} from 'react-native';
import {useSelector} from 'react-redux';
import {RootState, useAppDispatch} from '../../store';
import {getLaunches} from '../../store/slices/launches';
import LaunchList from './components/LaunchList';

const Launches = () => {
  const launches = useSelector((state: RootState) => state.launches.launches);
  const dispatch = useAppDispatch();
  console.log(launches[1]);
  useEffect(() => {
    dispatch(getLaunches());
  }, [dispatch]);

  return (
    <View style={$containerList}>
      <LaunchList launches={launches} />
    </View>
  );
};

const $containerList: ViewStyle = {
  paddingHorizontal: 20,
};

export default Launches;
