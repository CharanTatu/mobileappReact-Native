import React,{useState,useEffect} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  FlatList,
  TouchableOpacity,
  Image,
  ScrollView,
  Alert,
} from 'react-native';
import {SliderBox} from 'react-native-image-slider-box';
import {Card, Avatar} from 'react-native-elements';
function UiDesign() {
  const Data = {
    images: [
      'https://source.unsplash.com/1024x768/?nature',
      'https://source.unsplash.com/1024x768/?water',
      'https://source.unsplash.com/1024x768/?girl',
    ],
  };
  const FirstCard = [{
    id:1,
    name:'jio',
    images:'https://pixabay.com/vectors/icons-phone-round-connect-service-1831922/'
  },
  {
    id:2,
    name:'dmart'
  },
  {
    id:3,
    name:'card'
  },
]
  const secttileData = [
    {
      id: 1,
      name: 'Grocery',
    },
    {
      id: 2,
      name: 'farm',
    },
    {
      id: 3,
      name: 'barrow',
    },
    {
      id: 4,
      name: 'bike',
    },
  ];
  const reservedPlace = [
    {
      id: 1,
      name: 'Recharge',
      lastname: 'mobile-recharge',
      uri: 'https://source.unsplash.com/1024x768/?nature',
    },
    {
      id: 2,
      name: 'Billing',
      lastname: 'electricity bill',
      uri: 'https://source.unsplash.com/1024x768/?nature',
    },
    {
      id: 3,
      name: 'Booking',
      lastname: 'bus ticket booking',
      uri: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
      id: 4,
      name: 'India-Gas',
      lastname: 'bus ticket booking',
      uri: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
      id: 5,
      name: 'Office',
      lastname: 'bus ticket booking',
      uri: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
      id: 6,
      name: 'loacal',
      lastname: 'bus ticket booking',
      uri: 'https://source.unsplash.com/1024x768/?girl',
    },
    {
      id: 7,
      name: 'Tv recharge',
      lastname: 'bus ticket booking',
      uri: 'https://source.unsplash.com/1024x768/?girl',
    },
  ];
  function GetidNextScreen({id,name}){
    console.log("==========id",id,name)
    Alert.alert(`Next screen Name ====> ${name}`);
  }
  return (
    <SafeAreaView
      style={[
        styles.container,
        {
          flexDirection: 'column',
        },
      ]}>
      <View style={{marginTop: 10, flex: 6}}>
        <ScrollView>
          <SliderBox
            images={Data.images}
            sliderBoxHeight={200}
            onCurrentImagePressed={index =>
              console.log(`image ${index} pressed`)
            }
            dotColor="#FFEE58"
            inactiveDotColor="#90A4AE"
            paginationBoxVerticalPadding={20}
            autoplay
            circleLoop
            resizeMethod={'resize'}
            resizeMode={'cover'}
            paginationBoxStyle={{
              position: 'absolute',
              bottom: 0,
              padding: 0,
              alignItems: 'center',
              alignSelf: 'center',
              justifyContent: 'center',
              paddingVertical: 10,
            }}
            dotStyle={{
              width: 10,
              height: 10,
              borderRadius: 5,
              marginHorizontal: 0,
              padding: 0,
              margin: 0,
              backgroundColor: 'rgba(128, 128, 128, 0.92)',
            }}
            ImageComponentStyle={{borderRadius: 15, width: '94%', marginTop: 5}}
            imageLoadingColor="#2196F3"
          />
          <View>
            <Card>
                <Text style={{color:'blue', textAlign:'center',fontSize:18}}>Recharg section</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {FirstCard.map(({id, name,images}) => {
                  return (
                    <TouchableOpacity
                      key={id}
                      style={{
                        paddingHorizontal: '7%',
                        paddingVertical: '4%',
                        borderRadius: 4,
                        backgroundColor: 'white',
                        alignSelf: 'flex-start',
                        marginHorizontal: '1%',
                        marginBottom: 6,
                        minWidth: '20%',
                        textAlign: 'center',
                        height: 80,
                      }}
                      onPress={() => GetidNextScreen({id, name})}>
                      <Text style={{color:'blue', textAlign:'center'}}>{name}</Text>
                      <Avatar
                        size="medium"
                        overlayContainerStyle={{backgroundColor: 'orange'}}
                        icon={{
                          name: 'meetup',
                          color: 'red',
                          type: 'font-awesome',
                        }}
                         //  source={{uri:images}}
                        //backgroundColor="gray"
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
              <View>
                <Text style={{color:'blue',fontSize:20, textAlign:'center',marginTop:'5%'}}>Welcome in recharge section </Text>
              </View>
            </Card>
            <Card>
            <Text style={{color:'blue', textAlign:'center',fontSize:18}}>Billing section</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {reservedPlace.map(({id, name, uri}) => {
                  return (
                    <TouchableOpacity
                      key={id}
                      style={{
                        paddingHorizontal: '6%',
                        paddingVertical: 8,
                        borderRadius: 4,
                        backgroundColor: 'white',
                        alignSelf: 'flex-start',
                        marginHorizontal: '1%',
                        marginBottom: 6,
                        minWidth: '20%',
                        textAlign: 'center',
                        height: 80,
                      }}
                      onPress={() => GetidNextScreen({id, name})}>
                      {/* <Image source={{uri: value.uri}}/> */}
                      <Text style={{color:'blue',textAlign:'center'}}>{name}</Text>
                      <Avatar
                        size="medium"
                        //  overlayContainerStyle={{backgroundColor: 'blue'}}
                        icon={{
                          name: 'meetup',
                          color: 'red',
                          type: 'font-awesome',
                        }}
                        //  source={{uri:uri}}
                        backgroundColor="gray"
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Card>
            <Card>
            <Text style={{color:'blue', textAlign:'center',fontSize:18}}>Market section</Text>
              <View style={{flexDirection: 'row', flexWrap: 'wrap'}}>
                {secttileData.map(({id, name}) => {
                  return (
                    <TouchableOpacity
                      key={id}
                      style={{
                        paddingHorizontal: '7%',
                        paddingVertical: '4%',
                        borderRadius: 4,
                        backgroundColor: 'white',
                        alignSelf: 'flex-start',
                        marginHorizontal: '1%',
                        marginBottom: 6,
                        minWidth: '20%',
                        textAlign: 'center',
                        height: 80,
                      }}
                      onPress={() => GetidNextScreen({id, name})}>
                      {/* <Image source={{uri: value.uri}}/> */}
                      <Text style={{color:'blue',textAlign:'center'}}>{name}</Text>
                      <Avatar
                        icon={{
                          name: 'rocket',
                          color: 'orange',
                          type: 'font-awesome',
                        }}
                        //   source={{uri:uri}}
                        size="medium"
                        backgroundColor="gray"
                      />
                    </TouchableOpacity>
                  );
                })}
              </View>
            </Card>
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
 
export default UiDesign
const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingTop: 30,
    backgroundColor: '#ecf0f1',
  },
  paragraph: {
    margin: 24,
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    color: '#34495e',
  },
});
