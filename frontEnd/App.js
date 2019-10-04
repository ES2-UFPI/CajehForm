import React from 'react';
import {View, Text} from 'react-native';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';
import LobbyScreen from './src/LobbyScreen/Lobby.js';
import PublishScreen from './src/PublishScreen/Publish.js';
import MaterialScreen from './src/MaterialScreen/Material.js';
import {
  Body,
  Content,
  Header,
  Left,
  Right,
  Icon,
  Title,
  Button,
} from 'native-base';

const AppNavigator = createStackNavigator({
  Lobby: {
    screen: LobbyScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Publish: {
    screen: PublishScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
  Material: {
    screen: MaterialScreen,
    navigationOptions: () => ({
      header: null,
    }),
  },
});

export default createAppContainer(AppNavigator);
