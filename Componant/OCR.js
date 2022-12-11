import React,{useState} from 'react'
import {
  View,
  Text,
  SafeAreaView,
  StyleSheet,
  TouchableOpacity,
  PermissionsAndroid,
  ToastAndroid
} from 'react-native';
import { launchCamera, launchImageLibrary } from 'react-native-image-picker'
import RNTextDetector from 'rn-text-detector'
const OCR = () => {
    const [textData, setTextData] = useState('')
    const [cardview, setCardview] = useState(false);
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
         setCardview(true)
         setTextData(textRecognition.map(data=>data.text))
      }
    }
 
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
                <View style={styles.card}>
            <Text style={{fontWeight: 'bold'}}>User Data:{textData}</Text>
          </View>
            </>):(<></>)}
          </View>
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
    marginVertical:'20%'
  },
});
 
export default OCR