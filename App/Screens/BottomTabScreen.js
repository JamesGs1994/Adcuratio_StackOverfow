import {createMaterialBottomTabNavigator} from '@react-navigation/material-bottom-tabs';
import ReactScreen from './ReactScreen';
import ReactNativeScreen from './ReactNativeScreen';
import NodeScreen from './NodeScreen';
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons';
import Colors from '../Styles/Colors';

const Tab = createMaterialBottomTabNavigator();

const BottomTabScreen = () => {
  return (
    <Tab.Navigator
      inactiveColor={Colors.desc}
      activeColor={Colors.black}
      barStyle={{
        backgroundColor: Colors.warningSnack,
      }}>
      <Tab.Screen
        name="React"
        component={ReactScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="react" size={26} />,
        }}
      />
      <Tab.Screen
        name="Node"
        component={NodeScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="nodejs" size={26} />,
        }}
      />
      <Tab.Screen
        name="React Native"
        component={ReactNativeScreen}
        options={{
          tabBarIcon: () => <MaterialCommunityIcons name="react" size={26} />,
        }}
      />
    </Tab.Navigator>
  );
};
export default BottomTabScreen;
