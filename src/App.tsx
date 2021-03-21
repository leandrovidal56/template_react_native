import 'react-native-gesture-handler';

import React from 'react';
import {View, StatusBar, Text} from 'react-native';
import { NavigationContainer } from '@react-navigation/native';

import Routes from './routes';

const App: React.FC = () => (
  <NavigationContainer>
    <StatusBar barStyle="dark-content" />
    <View style={{ flex: 1, backgroundColor: '#918'}} >
      <Routes />
    </View>
  </NavigationContainer>
) 

export default App;