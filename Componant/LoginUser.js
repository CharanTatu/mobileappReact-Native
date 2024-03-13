import axios from 'axios';
import React,{useState,useEffect}from 'react'
import { View,Text,TextInput,TouchableOpacity,ToastAndroid,StyleSheet} from 'react-native'
import { saveTokenInPref,getTokenFromPref } from './userpref';
import { setRootPage } from './NavController';

function LoginUser({navigation}) {
    const [userEmail,SetEmail] = useState('');
    const [userPassword,SetUserPassword] = useState('');
    const base_url ='https://reqres.in/api/login';

   useEffect(()=>{
     getTokenFromPref().then((res)=>{
        if(res!=null){
            setRootPage("Dashboard", navigation, {})
         }
      })
    },[])

async function loginUser (){
   if(userEmail!=''&&userPassword!=''){
    const header ={
        email:userEmail,
        password:userPassword
       }
      await axios.post(`${base_url}`,header).then((res)=>{
        saveTokenInPref(res.data.token).then(()=>{
            setRootPage("Dashboard", navigation, {})
        })
     }).catch((err)=>{
        console.log(err)
        messageShow("Please add valied email")
     })
   }else{
    messageShow('Please add valied email and password')
   }
}
function messageShow(msg){
    ToastAndroid.showWithGravity(
        msg,
        ToastAndroid.LONG,
        ToastAndroid.BOTTOM
    );
}
  return (
    <View style={{ flex:1}}>
   <View style={{marginTop:'50%'}}>
   <Text style={{textAlign:'center',fontWeight:'600',fontSize:20,bottom:30}}>Welcome to SpringCT</Text>
    <TextInput
        value={userEmail}
        onChange={(e) => SetEmail(e.nativeEvent.text)}
        placeholder='Email'
        style={style.Input}
        placeholderTextColor='black'
        fontSize={16}
        />
        <TextInput
        placeholder='Password'
        value={userPassword}
        onChange={(e) => SetUserPassword(e.nativeEvent.text)}
        style={style.Input}
        placeholderTextColor='black'
        fontSize={16}
        />
        <TouchableOpacity
        onPress={loginUser}
        style={style.button}
        >
        <Text style={{ color: 'white', fontSize: 16, fontWeight: 'bold' }}>LogIn</Text>
        </TouchableOpacity>
   </View>
  </View>
  )
}

const style = StyleSheet.create({
    Input:{
        height: 55,
        margin: 12,
        borderWidth: 1.5,
        padding: 10,
        color: 'black',
        borderRadius: 8,
    },
    button:{
        backgroundColor: '#FFA500',
        paddingVertical: 10,
        paddingHorizontal: 20,
        borderRadius: 20,
        width: 150,
        alignItems: 'center',
        alignSelf: 'center',
        top:'10%'
      }
})

export default LoginUser
