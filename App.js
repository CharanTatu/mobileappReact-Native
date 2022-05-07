/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React from 'react';
import { View, SafeAreaView, ScrollView, Text, } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawerlayout from './Componant/Picker';
import Firstcom from './Componant/Firstcom';
import Handlingtext from './Componant/Handlingtext'
import Apiget from './Componant/Apiget'
import Drawer from './Componant/Drawer';
import Flex from './Componant/Flex';
import TimePicker from './Componant/TimePicker';
import TouchHighlite from './Componant/TouchHighlite';
import Share from './Componant/Share';
import ImageBack from './Componant/ImageBack';
import Advance from './Componant/Advance';
import Models from './Componant/Models';
import ImagePick from './Componant/ImagePick';
import DetailsAdven from './Componant/DetailsAdven';
import PanRespo from './Componant/PanRespo';
import Toolbar from './Componant/Toolbar';
import Reservation from './Componant/Reservation';
import Wbview from './Componant/Wbview';
import VirtualizedLists from './Componant/VirtulizedLists';
import Netinfo from './Componant/Netinfo';
import Pick from './Componant/simpleData/Pick';
// import Texr from './Componant/Texr';
const Stack = createNativeStackNavigator();
const App = () => {
  // screenOptions={{ headerLeft: () => <View><Text>he</Text></View> }}
  return (

    <NavigationContainer>
      <Toolbar />
      <Stack.Navigator initialRouteName={'profile'}>
        <Stack.Screen name="Home" component={Drawer} options={{
          title: 'welcome!!',
          headerTitleAlign: 'center',
          headerBackVisible: false,
          headerShown: false
          //  headerLeft: () => <View>
          //   <TouchableOpacity>
          //     <Icon name='menu' size={35} color="#000000" />
          //   </TouchableOpacity>
          // </View>
        }} />
        <Stack.Screen name="profile" component={ImageBack} options={{ title: "Hello Team" }} />
        <Stack.Screen name="getapi" component={Apiget} options={{ title: "product" }} />
        <Stack.Screen name="timepick" component={TimePicker} options={{ title: "get time" }} />
        <Stack.Screen name="model" component={Models} options={{ title: "model" }} />
        <Stack.Screen name="shareFile" component={Share} options={{ title: "shareFile" }} />
        <Stack.Screen name="Addvance" component={Advance} options={{ title: "addImage" }} />
        <Stack.Screen name="AddvanceDetails" component={DetailsAdven} options={{ title: "Details-Trip" }} />
        <Stack.Screen name="imagepic" component={ImagePick} options={{ title: "addImage" }} />
        <Stack.Screen name="panrespo" component={PanRespo} options={{ title: "panresponder" }} />
        <Stack.Screen name="reservation" component={Reservation} options={{ title: "reservation" }} />
        <Stack.Screen name="webview" component={Wbview} options={{ title: "webview" }} />
        <Stack.Screen name="List" component={VirtualizedLists} options={{ title: "List" }} />
        <Stack.Screen name="netinfo" component={Netinfo} options={{ title: "netinfo" }} />
        <Stack.Screen name="pick" component={Pick} options={{ title: "pick" }} />
      </Stack.Navigator>
    </NavigationContainer>

    // <SafeAreaView>
    //   <ScrollView>
    //     <View>
    //       {/* <TimePicker /> */}
    //       {/* <Texr /> */}
    //       {/* <Drawer /> */}
    //       {/* <ImageBack /> */}
    //       <Models />
    //       {/* <ActivityIndicator />
    //       <TouchHighlite />
    //       <Share /> */}
    //       <Apiget />
    //       <Drawerlayout />
    //       <Firstcom />
    //       <Handlingtext />
    //     </View>
    //   </ScrollView>
    // </SafeAreaView>
  );
};
export default App;
