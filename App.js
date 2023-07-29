import * as React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import BottomTabScreen from './App/Screens/BottomTabScreen';
import SplashScreen from './App/Screens/SplashScreen';
import ReactScreen from './App/Screens/ReactScreen';
import ReactNativeScreen from './App/Screens/ReactNativeScreen';
import NodeScreen from './App/Screens/NodeScreen';
import {navigationRef} from './App/NavServices/NaviagtionService';

const Stack = createNativeStackNavigator();

function BottomTabScreenStack() {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}>
      <Stack.Screen name="ReactScreen" component={ReactScreen} />
      <Stack.Screen name="ReactNativeScreen" component={ReactNativeScreen} />
      <Stack.Screen name="NodeScreen" component={NodeScreen} />
      <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
    </Stack.Navigator>
  );
}

function App() {
  return (
    <NavigationContainer ref={navigationRef}>
      <Stack.Navigator
        initialRouteName="SplashScreen"
        screenOptions={{
          headerShown: false,
        }}>
        <Stack.Screen name="SplashScreen" component={SplashScreen} />
        <Stack.Screen name="BottomTabScreen" component={BottomTabScreen} />
        <Stack.Screen
          name="BottomTabScreenStack"
          component={BottomTabScreenStack}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
