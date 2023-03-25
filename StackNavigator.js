import {createStackNavigator} from '@react-navigation/stack';
import React from 'react';

import LoginScreen from './screens/Login';
import HomeScreen from './screens/Home';
import MessagesScreen from './screens/Messages';
import ExploreScreen from './screens/Explore';
import MyRoomScreen from './screens/MyRoom';
import AccountScreen from './screens/Account';
import NewCardScreen from './screens/NewCard';
import useAuth from './hooks/useAuth';

const Stack = createStackNavigator();

const StackNavigator = () => {
    const {user} = useAuth();
  
    return (
      <Stack.Navigator>
        {user ? (
            <>
              <Stack.Group>
                <Stack.Screen name="Home" component={HomeScreen} />
                <Stack.Screen name="Messages" component={MessagesScreen} />
                <Stack.Screen name="Explore" component={ExploreScreen} />
                <Stack.Screen name="MyRoom" component={MyRoomScreen} />
                <Stack.Screen name="Account" component={AccountScreen} />
              </Stack.Group>
              <Stack.Group screenOptions={{presentation: 'modal'}}>
                <Stack.Screen name="NewCard" component={NewCardScreen} />
              </Stack.Group>
            </>
        ) : (
            <Stack.Screen name="Login" component={LoginScreen} />
        )}
      </Stack.Navigator>
    );
  };
  
export default StackNavigator;