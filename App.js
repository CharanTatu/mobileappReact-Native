/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './Componant/assets';
import { LogBox } from 'react-native'
import TabNavigator from './Componant/screens/TabNavigator';
LogBox.ignoreLogs([
	'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
	'NativeBase: The contrast ratio of',
	"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  'componentWillMount has been renamed, and is not recommended for use'
])
const Stack = createNativeStackNavigator();

const App = () => {

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator>
         <TabNavigator/>
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
