import React, {useRef, useState} from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/Feather';
const Drawer = ({navigation}) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const navigationView = () => {
    return (
      <View style={{marginTop:60}}>
        {/* <Button
          color="mediumspringgreen"
          title="Close drawer"
          onPress={() => drawer.current.closeDrawer()}
        />
        <Button
          title="Product-List"
          color="gainsboro"
          onPress={() => navigation.navigate('getapi')}></Button>
        <Button
          title="Share-File"
          color="gainsboro"
          onPress={() => navigation.navigate('shareFile')}></Button>
        <Button
          title="PanResponder"
          color="gainsboro"
          onPress={() => navigation.navigate('panrespo')}></Button>
        <Button
          title="image-Pick"
          color="gainsboro"
          onPress={() => navigation.navigate('imagepic')}></Button>
        <Button
          title="title"
          color="gainsboro"
          onPress={() => navigation.navigate('title')}></Button> */}
        {/* <Button title="List" color="gainsboro" onPress={() => navigation.navigate("List")}></Button> */}
        <Button
          title="Trip-Adventures"
          color="deeppink"
          onPress={() => navigation.navigate('model')}></Button>
        {/* <Button
          title="Net-Info"
          color="gainsboro"
          onPress={() => navigation.navigate('netinfo')}></Button>
        <Button
          title="pick"
          color="gainsboro"
          onPress={() => navigation.navigate('pick')}></Button>
        <Button
          title="Easing-Animation"
          color="gainsboro"
          onPress={() => navigation.navigate('EasingAnimation')}></Button> */}
        {/* <Button title="pick" color="gainsboro" onPress={() => navigation.navigate("timepick")}></Button> */}
        {/* <Button
          title="Google-Map"
          color="gainsboro"
          onPress={() => navigation.navigate('GoogleMap')}
        />
        <Button
          title="Video-play"
          color="gainsboro"
          onPress={() => navigation.navigate('Video')}
        />
        <Button
          title="Log-Redux-!!"
          color="gainsboro"
          onPress={() => navigation.navigate('LogRedux')}
        />
        <Button
          title="QR-Scanner!!"
          color="gainsboro"
          onPress={() => navigation.navigate('QR-Scanner')}
        />
        <Button
          title="Codition-render"
          color="gainsboro"
          onPress={() => navigation.navigate('Codition')}
        />
        <Button
          title="SQlite-Operation"
          color="mediumspringgreen"
          onPress={() => navigation.navigate('SQlite-Operation')}
        />
        <Button
          title="hover-animation"
          color="blue"
          onPress={() => navigation.navigate('animation')}
        /> */}
      </View>
    );
  };

  return (
      <DrawerLayout
        drawerBackgroundColor="white"
        ref={drawer}
        drawerWidth={300}
        drawerPosition={drawerPosition}
        renderNavigationView={navigationView}>
        {/* <Button
                    title="Open drawer"
                    onPress={() => drawer.current.openDrawer()}
                /> */}
        <View style={{flex: 1, alignItems: 'stretch'}}>
          <View
            style={{
              height: 50,
              borderWidth: 0,
              backgroundColor: '#0000FF',
              flexDirection: 'row',
              flexWrap: 'wrap',
            }}>
            <Icon
              name="menu"
              size={30}
              color="#000000"
              onPress={() => drawer.current.openDrawer()}
              style={{marginLeft: 20,marginTop:20}}
            />
            <Text
              style={{
                marginLeft: 110,
                marginTop: 20,
              }}>
              Welcome!!
            </Text>
          </View>
          <Text style={{textAlign:'center',marginTop:70, fontFamily: "Raleway", fontStyle: "italic", fontWeight: "bold"}}>Click side bar menu and enjoy your trip</Text>
        </View>
      </DrawerLayout>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
});
