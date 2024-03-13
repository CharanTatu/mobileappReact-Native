/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, {useEffect, useState} from 'react';
import {StatusBar} from 'react-native';
import {NavigationContainer} from '@react-navigation/native';
import {createNativeStackNavigator} from '@react-navigation/native-stack';
import {Provider} from 'react-redux';
import {store} from './Componant/assets';
import { LogBox } from 'react-native'
import LoginUser from './Componant/LoginUser';
import DashboardSpringCt from './Componant/DashboardSpringCt';
import { getTokenFromPref } from './Componant/userpref';
import EmployeAdd from './Componant/EmployeAdd';
LogBox.ignoreLogs([
	'ViewPropTypes will be removed from React Native. Migrate to ViewPropTypes exported from \'deprecated-react-native-prop-types\'.',
	'NativeBase: The contrast ratio of',
	"[react-native-gesture-handler] Seems like you\'re using an old API with gesture components, check out new Gestures system!",
  'componentWillMount has been renamed, and is not recommended for use'
])
const Stack = createNativeStackNavigator();

const App = () => {
  const [token, setToken] = useState(null);
  useEffect(()=>{
    getTokenFromPref().then((res)=>{
      setToken(res)
    })
  },[])

  return (
    <Provider store={store}>
      <StatusBar backgroundColor="black" />
      <NavigationContainer>
        <Stack.Navigator initialRouteName={token!=null?'Dashboard':'Login'}>
        <Stack.Screen
            name="Dashboard"
            component={DashboardSpringCt}
            options={{title: 'Dashboard'}}
          />
        <Stack.Screen
            name="Login"
            component={LoginUser}
            options={{title: 'Login'}}
          />

         <Stack.Screen
            name="EmployeeAdd"
            component={EmployeAdd}
            options={{title: 'EmployeeAdd'}}
          />
       
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  );
};
export default App;
