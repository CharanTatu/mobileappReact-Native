import React, {useRef, useState} from 'react';
import {
  Button,
  Text,
  View,
  SafeAreaView,
  StyleSheet,
  Pressable,
  TouchableOpacity,
  TextInput,
} from 'react-native';
import DrawerLayout from 'react-native-drawer-layout';
import Icon from 'react-native-vector-icons/Feather';
import Icons from 'react-native-vector-icons/FontAwesome';
import Forword from 'react-native-vector-icons/AntDesign';
const Drawer = ({navigation}) => {
  const drawer = useRef(null);
  const [drawerPosition, setDrawerPosition] = useState('left');

  const navigationView = () => {
    return (
      <View>
       <Text style={{alignItems:'center',color:"#2b62f2",justifyContent:'center',marginTop:'10%'
       ,marginLeft:'10%',fontSize:20}}>{"Welcome in my trip app"}</Text>
       <TouchableOpacity
   style={{
       borderWidth:1,
       borderColor:'rgba(0,0,0,0.2)',
       alignItems:'center',
       justifyContent:'center',
       width:100,
       height:100,
       backgroundColor:'#fff',
       borderRadius:50,
       marginLeft:'30%',
       marginTop:'10%'
           }}
 >
  <Icons name={"user-circle"}  size={70} color="#01a699" />

 </TouchableOpacity>
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
       <View style={{marginTop:"10%"}}>
       <Button
        style={{marginTop:90}}
          title="Trip-Adventures"
          color="deeppink"
          onPress={() => navigation.navigate('model')}></Button>
           <Button
          title="Log-Redux-!!"
          color="gainsboro"
          onPress={() => navigation.navigate('LogRedux')}
        />
         <Button
          title="Chat-now!!"
          color="gainsboro"
          onPress={() => navigation.navigate('messaging')}
        />
       </View>
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
          color="#2b62f2"
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
        <View style={{flex: 1, alignItems: 'stretch',}}>
          <View
            style={{
              height: 50,
              borderWidth: 0,
              backgroundColor: '#2b62f2',
              flexDirection: 'row',
              flexWrap: 'wrap'
            }}>
            <Icon
              name="menu"
              size={30}
              color="#FFFFFF"
              onPress={() => drawer.current.openDrawer()}
              style={{marginLeft: 20,}}
            />
            <Text
              style={{
               marginLeft:'25%', textAlign:'center', fontFamily: "Raleway", color:'#FFFFFF',
               fontWeight: "bold",fontSize:20,justifyContent:'center', alignSelf: 'stretch', position: 'absolute',
              }}>
              Welcome RN-User!!
            </Text>
          </View>
          <View style={styles.buttonTile}>
            <TouchableOpacity
             onPress={() => navigation.navigate('model')}
             >
            <Text style={{color:'#2b62f2',fontSize: 16,fontWeight: "bold"}}>Booking Now</Text>
            </TouchableOpacity>
          </View>

          <View style={styles.buttonTile}>
            <TouchableOpacity onPress={() => navigation.navigate('messaging')}>
            <Text style={{color:'#2b62f2',fontSize: 16,fontWeight: "bold"}}>Chat with friend</Text>
            </TouchableOpacity>
          </View>

         <View style={styles.card}>
         <Text style={styles.logStyle}>Click side bar menu and enjoy your trip</Text>
         <TouchableOpacity
      style={styles.circleButton}
     onPress={() => navigation.navigate('RNUser')}
 >
   <Forword name={"arrowright"}  size={30} color="#FFFFFF" />
        </TouchableOpacity>
         </View>
        </View>
      </DrawerLayout>
  );
};

export default Drawer;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  logStyle:{
    textAlign:'center', 
    fontFamily: "Raleway",
     fontSize:20,fontStyle: "italic", fontWeight: "bold"
  },
  card: {
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    padding: 20,
    borderRadius: 10,
    marginLeft: 20,
    marginRight: 20,
    marginVertical:'35%'
  },
  buttonTile: {
    height: 50,
    width: '80%',
    marginTop: 30,
    marginBottom: 10,
    backgroundColor: 'white', //#FF5733
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center',
    margin: 2,
    shadowColor: 'black',
    shadowOffset: {width: 0, height: 2},
    shadowRadius: 6,
    shadowOpacity: 0.26,
    elevation: 8,
    backgroundColor: 'white',
    marginLeft: '10%',
    marginRight: '10%',
  },
  circleButton:{
    borderWidth:1,
    borderColor:'rgba(0,0,0,0.2)',
    alignItems:'center',
    justifyContent:'center',
    width:50,
    height:50,
    backgroundColor:'#2b62f2',
    borderRadius:50,
    marginHorizontal:'40%',
    marginTop:'10%'
  }
});
