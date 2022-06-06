import * as React from 'react';
import Ionicons from 'react-native-vector-icons/Ionicons';
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';

/* ------- SCREENS ------- */
import {
  Wearables,
  Challenge,
  Fitness,
  LifeStyle,
  Track,
} from 'app/screens/index';

import { Colors } from 'app/theme/index';
import { Text } from 'react-native';

const DrawerNavigation = () => {
  const { Screen, Navigator } = createBottomTabNavigator();
  const options = { headerShown: false };

  const screenOptions = ({ route }) => ({
    tabBarIcon: ({ focused, color, size }) => {
      let name;

      switch (route.name) {
        case 'Wearables':
          name = focused ? 'fast-food' : 'fast-food-outline';
          break;
        case 'Challenge':
          name = focused ? 'fitness' : 'fitness-outline';
          break;
        case 'Fitness':
          name = focused ? 'musical-notes' : 'musical-notes-outline';
          break;
        case 'LifeStyle':
          name = focused ? 'analytics' : 'analytics-outline'; //'compass' : 'compass-outline';
          break;
        case 'Track':
          name = focused ? 'bonfire' : 'bonfire-outline';
          break;
      }

      return <Ionicons {...{ name, size, color }} />;
    },
    // tabBarLabel: props => {
    //   //return null;
    //   return (
    //     <Text
    //       style={{
    //         fontFamily: 'Inter',
    //         fontSize: FONT_SIZE.XXS,
    //         fontWeight: '700',
    //         color: props.focused ? Colors.WHITE : Colors.ICON_INACTIVE,
    //       }}>
    //       {route.name}
    //     </Text>
    //   );
    // },
    // tabBarActiveTintColor: Colors.ICON_ACTIVE,
    // tabBarInactiveTintColor: Colors.ICON_INACTIVE,
    // tabBarActiveBackgroundColor: Colors.BLACK,
    // tabBarInactiveBackgroundColor: Colors.BLACK,
    tabBarStyle: {
      borderTopColor: Colors.BACKGROUND.WHITE,
      backgroundColor: Colors.BACKGROUND.WHITE,
    },
  });

  return (
    <Navigator initialRouteName="Wearables" {...{ screenOptions }}>
      <Screen name="Wearables" component={Wearables} {...{ options }} />
      <Screen name="Challenge" component={Challenge} {...{ options }} />
      <Screen name="Fitness" component={Fitness} {...{ options }} />
      <Screen name="LifeStyle" component={LifeStyle} {...{ options }} />
      <Screen name="Track" component={Track} {...{ options }} />
    </Navigator>
  );
};

export default DrawerNavigation;
