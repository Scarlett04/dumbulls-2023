import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import StackNavigator from './StackNavigator';
import {AuthProvider} from './hooks/useAuth';
import { View } from 'react-native';
import Fetch from './src/Fetch';

export default function App() {
  return (
    <View>
      <Fetch />
    </View>

    // <NavigationContainer>
    //   <AuthProvider>
    //     <StackNavigator />
    //   </AuthProvider>
    // </NavigationContainer>
  );
}