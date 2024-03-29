import React,{useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid,
  FlatList
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import RNTextDetector from 'rn-text-detector'
import Post from './Post';
const OCR = () => {
    const [textData, setTextData] = useState('')
    const [cardview, setCardview ] = useState(false);
    const [numPlate,setNumPlate] = useState("");
    const regex = /[A-Z || a-z]{0,2}[// -]{0,2}[0-9]{2}[// -]{0,1}[A-Z || a-z]{1,2}[// -]{0,1}[0-9]{4}/g;
     const requestCameraPermission = async () => {
       try {
         const granted = await PermissionsAndroid.request(
           PermissionsAndroid.PERMISSIONS.CAMERA,
           {
             title: 'App Camera Permission',
             message: 'App needs access to your camera ',
             buttonNeutral: 'Ask Me Later',
             buttonNegative: 'Cancel',
             buttonPositive: 'OK',
           },
         );
         if (granted === PermissionsAndroid.RESULTS.GRANTED) {
           console.log('Camera permission given');
           launchCamera({mediaType: 'image'}, onImageSelect);
         } else {
           console.log('Camera permission denied');
         }
       } catch (err) {
         console.warn(err);
       }
     };
    const onPress=(type)=>{
     if(type == 'capture'){
      console.log(type);
      requestCameraPermission();
     }else if(type == 'library'){
       console.log(type);
       launchImageLibrary({mediaType: 'image'}, onImageSelect);
     }
    }
    async function onImageSelect(media){
      console.log("===============media",media)
      if(media.didCancel == true){
        ToastAndroid.showWithGravity( "You are empty file attached",
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM)
      }else{
        const file = media.assets[0].uri;
        const textRecognition = await RNTextDetector.detectFromUri(file);
         console.log('===================TextData',textRecognition.map(data=>data.text));
         const TextData = textRecognition.map(data=>data.text)
         if(TextData == null || TextData == ''){
          ToastAndroid.showWithGravity( "Text Data is empty for attached file",
          ToastAndroid.LONG,
          ToastAndroid.CENTER)
          setCardview(false)
          setTextData('')
          setNumPlate('')
         }else{
          setCardview(true)
          setTextData(textRecognition.map(data=>data.text))
          const found = TextData.toString().match(regex);
         console.log("=================finalyfoundDataNuberplate",found);
         if(found == null || found == '')
         {
          setNumPlate(" is it for Empty")
         }else{
         setNumPlate(found)
         }
         }
      }
    }
    const posts =[
      {id:1,author:'charan',
      location:'pune city',
      DateTime:'-2hrs',
      like:22,
      content:'There is a new building for rent in the south corner of the colony. here are the pics; please check @patel',
      ImageArray:['http://i.imgur.com/XP2BE7q.jpg','http://i.imgur.com/6vOahbP.jpg']
      },
      {id:2,author:'nyn',location:'pune,aundh',like:12,
      content:'Dear friends @sachin its my first post,so all Dgate user i am happy to share that my garden inogartion program start so i will share some pic',ImageArray:[]},
      {id:3,author:'vishal',ImageArray:['http://i.imgur.com/6vOahbP.jpg'],like:42,
      content:'Hi, Dear friends its my first post,so all Dgate user i am happy to share that my #garden inogartion program start so i will share some pic'},
    ]
  const renderItem = ({ item }) => (
      <Post post={item} />
    );
  
  return (
    <SafeAreaView style={styles.container}>
      <View>
        <Text style={styles.HeaderText}>RN-User!!</Text>
        <View style={{marginTop: '20%'}}>
          <TouchableOpacity
            style={styles.buttonTile}
            onPress={() => onPress('capture')}>
            <Text style={styles.textColor}>Take Photo</Text>
          </TouchableOpacity>
          <View>
            <TouchableOpacity
              style={styles.buttonTile}
              onPress={() => onPress('library')}>
              <Text style={styles.textColor}>Pick a Photo</Text>
            </TouchableOpacity>
          </View>
          <View>
            {cardview ? (<>
                <View style={[styles.card,{marginVertical:'20%'}]}>
            <Text style={{fontWeight: 'bold', paddingBottom: 4, }}>Capture-Data:{textData}</Text>
            <Text style={{fontWeight: 'bold',color:'#2b62f2'}}>Number-Plate-Data:{numPlate}</Text>
          </View>
            </>):(<></>)}
          </View>
        </View>
    <View>
      <FlatList
        data={posts}
        renderItem={renderItem}
        keyExtractor={(item) => item.id.toString()}
      />
    </View>
      </View>
    </SafeAreaView>
  );
}
const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  buttonTile: {
    height: 50,
    width: '80%',
    marginTop: 10,
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
  HeaderText: {
    justifyContent: 'center',
    alignContent: 'center',
    fontSize: 16,
    fontWeight: 'bold',
    marginLeft: '40%',
    marginRight: '40%',
  },
  textColor: {
    color: '#2b62f2',
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
   //marginVertical:'20%'
  },
});
 
export default OCR