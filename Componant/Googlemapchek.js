import React,{useState,useRef} from 'react'
import {View,Text,TouchableOpacity, StyleSheet,Button} from 'react-native'
import { GooglePlacesAutocomplete } from 'react-native-google-places-autocomplete';
import ClearIcon from 'react-native-vector-icons/MaterialIcons'
function Googlemapchek({navigation}) {
    const [startLocation, setStartLocation] = useState('');
    const startLocationRef = useRef(null);
    const [endLocation, setEndLocation] = useState('');
    const endLocationRef = useRef(null);
    const[latlongstart,setLatlongsatrt] = useState('')
    const[latlongend,setLatlongend ]= useState('')
  
    const handleClearStartLocation = () => {
      setStartLocation('');
      startLocationRef.current?.clear();
    };
    const handleClearendLocation = () => {
      setEndLocation('');
      endLocationRef.current?.clear();
    };
   const renderClearButton= ()=>{
    return(<>
        {startLocation.length > 0 && (
            <View style={{backgroundColor:'white',marginTop:'7%',marginBottom:'2%',borderRadius:6,marginLeft:'-10%',marginRight:'2%'}}>
         <TouchableOpacity onPress={handleClearStartLocation}>
         <ClearIcon name="clear" size={20} color="black"/>
         </TouchableOpacity>
         </View>
      )}</>)}
    const renderClearButtonEndlocation= ()=>{
        return(<>
            {endLocation.length > 0 && (
                <View style={{backgroundColor:'white',marginTop:'7%',marginBottom:'2%',borderRadius:6,marginLeft:'-10%',marginRight:'2%'}}>
             <TouchableOpacity onPress={handleClearendLocation}>
             <ClearIcon name="clear" size={20} color="black"/>
             </TouchableOpacity>
             </View>
          )}</>)}
  
  return (
 <View style ={{flex:1,flexDirection:'column',backgroundColor:'white'}}>
      <Text style={{textAlign:'center',fontSize:20,color:'black'}}>Select Location</Text>
      <GooglePlacesAutocomplete
      placeholder='Start Location'
      autoFocus={false}
      fetchDetails={true}
      styles={{
        textInputContainer: {
          backgroundColor: 'white',
        },
        textInput: styles.textInputstyle,
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
        listView:{
           marginTop:'20%'
        }
      }}
      onPress={(data, details = null) => {
        console.log(data);
        setLatlongsatrt(details.geometry.location)
        setStartLocation(data.description);
      }}
      query={styles.credentialmap}
      onChangeText={(text) => setStartLocation(text)}
      value={startLocation}
      ref={startLocationRef}
      renderRightButton={renderClearButton}
    />
      <GooglePlacesAutocomplete
      placeholder='End Location'
      autoFocus={false}
      fetchDetails={true}
      styles={{
        textInputContainer:styles.textInputname,
        textInput: styles.textInputstyle,
        predefinedPlacesDescription: {
          color: '#1faadb',
        },
        listView:{marginTop:'5%'}}}
      onPress={(data, details = null) => {
        console.log(data.description);
        setLatlongend(details.geometry.location)
        setEndLocation(data.description);
      }}
      query={styles.credentialmap}
      onChangeText={(text) => setEndLocation(text)}
      value={endLocation}
      ref={endLocationRef}
      renderRightButton={renderClearButtonEndlocation}
    />  
    {endLocation.length >0 && startLocation.length>0 && (
    <TouchableOpacity style={styles.SubmitBtn} onPress={()=>navigation.navigate("mapview",{latlongstart,latlongend,startLocation,endLocation})}>
     <Text style={{textAlign:'center',fontSize:20}}>Submit</Text>
     </TouchableOpacity>)}
 </View>
  )
}

export default Googlemapchek

const styles = StyleSheet.create({
 textInputstyle:{
  height: 58,
  color: 'red',
  fontSize: 16,
  marginLeft: '1%',
  marginRight: '1%',
  marginTop: '2%',
  maxWidth:'98%',
  borderColor:'blue',
  borderWidth:2
 },
 textInputname:{
  backgroundColor: 'white',
  marginTop:'-78%'
},
credentialmap:{
  key: 'AIzaSyAgPcWRPdAnpQn3Rhbx1UDTQz49Ij2hzFc',
  language: 'en',
},
SubmitBtn:{
  borderWidth: 1,
  borderColor: 'rgba(0,0,0,0.2)',
  alignItems: 'center',
  justifyContent: 'center',
  width: 100,
  position: 'absolute',
  bottom: '64%',
  right: '38%',
  height: 50,
  backgroundColor: 'red',
  borderRadius: 100,},
})
