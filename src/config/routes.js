import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';

import Home from '../pages/Home';
import HomeSplash from '../pages/HomeSplash';

const Stack = createNativeStackNavigator();

function Routes() {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName="Home"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="Home" component={Home} />

        <Stack.Screen name="HomeSplash" component={HomeSplash} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default Routes;
