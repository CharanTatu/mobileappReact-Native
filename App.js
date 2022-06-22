/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 *
 * @format
 * @flow strict-local
 */

import React, { useEffect, useState } from 'react';
import { View, SafeAreaView, ScrollView, Text, StatusBar } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import Drawerlayout from './Componant/Picker';
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
import Easingmodule from './Componant/Easingmodule';
import MapData from './Componant/simpleData/MapData';
import Videoplay from './Componant/simpleData/Videoplay';
// import Texr from './Componant/Texr';
import { Provider } from 'react-redux';
import { store } from './Componant/assets';
import { LoginScreen } from './Componant/assets/LoginScreen';
import SqliteData from './Componant/database/SqliteData';
import EditScreen from './Componant/database/EditScreen';
import DeleteScreen from './Componant/database/DeleteScreen';
import QrScanner from './Componant/qrScanner/QrScanner';
import Titles from './Componant/qrScanner/Title'
import ConditionRender from './Componant/ConditionRender';


const Stack = createNativeStackNavigator();

// const Greeting = (props) => {
//   return (
//     <View style={{ alignItems: 'center' }}>
//       <Text>Hello {props.data}!</Text>
//     </View>
//   );
// }

const App = () => {
  // screenOptions={{ headerLeft: () => <View><Text>he</Text></View> }}

  // function showTime() {
  //   return true;
  // }
  // let data = setInterval(showTime, 2000);
  //console.log(data)
  // const data = true;
  const [name, setName] = useState("");

  useEffect(() => {
    intervalFunc();
  }, []);

  const intervalFunc = () => {
    setInterval(() => {
      changeName();
    }, 2000);
  };

  const changeName = () => {
    name ? setName("Hello-Team!!") : setName("Hello-User!!");
  };


  return (
    <Provider store={store}>
      <StatusBar backgroundColor='mediumspringgreen' />
      <NavigationContainer>
        <Toolbar />
        <Stack.Navigator initialRouteName={'profile'}>
          <Stack.Screen name="Home" component={Drawer} options={{
            title: 'welcome!!',
            headerTitleAlign: 'center',
            headerBackVisible: false,
            headerShown: false,
            //  headerLeft: () => <View>
            //   <TouchableOpacity>
            //     <Icon name='menu' size={35} color="#000000" />
            //   </TouchableOpacity>
            // </View>
          }} />
          <Stack.Screen name="profile" component={ImageBack}
            options={{
              title: name
            }}
          />
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
          <Stack.Screen name="EasingAnimation" component={Easingmodule} options={{ title: "EasingAnimation" }} />
          <Stack.Screen name="GoogleMap" component={MapData} options={{ title: "GoogleMap" }} />
          <Stack.Screen name="Video" component={Videoplay} options={{ title: "Video" }} />
          <Stack.Screen name="LogRedux" component={LoginScreen} options={{ title: "Log-Redux" }} />
          <Stack.Screen name="SQlite-Operation" component={SqliteData} options={{ title: "SQlite-Operation" }} />
          <Stack.Screen name="Edit-Operation" component={EditScreen} options={{ title: "Edit-Operation" }} />
          <Stack.Screen name="Delete-Operation" component={DeleteScreen} options={{ title: "Delete-Operation" }} />
          <Stack.Screen name="QR-Scanner" component={QrScanner} options={{ title: "QR-Scanner" }} />
          <Stack.Screen name="title" component={Titles} options={{ title: "title" }} />
          <Stack.Screen name="Codition" component={ConditionRender} options={{ title: "title" }} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
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

