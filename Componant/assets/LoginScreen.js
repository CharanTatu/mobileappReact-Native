import React,{useState} from 'react'
import { View, Text, TouchableOpacity,TextInput,StyleSheet,ScrollView,Alert,ActivityIndicator} from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { connect } from 'react-redux'
import { onFetchProducet, onUserLogin } from '../assets'
import { getFirstNameFromPref, getLastNameFromPref, getTokenFromPref, saveFirstNameInPref, saveLastName, saveLastNameInPref, saveTokenInPref } from '../userpref'
const _LoginScreen = (props) => {
    
    const[email,setEmail]= useState('');
    const [password,setPassword]=useState('')
    const [activity, setActivity]=useState(false);
    console.log("======",email,password)
    const { userReducer, onFetchProducet, onUserLogin } = props;
    // console.log(userReducer)
    const { user, product } = userReducer;
    if(user != undefined){
        saveTokenInPref(user.token).then(()=>{
            console.log("===========savetoken")
            getTokenFromPref().then((token)=>{
               console.log("=============getokenforasyn",token)
            })           
           })
        saveFirstNameInPref(user.firstName).then(()=>{
            getFirstNameFromPref().then((name)=>{
                console.log("=================name",name)
            })
        })
        saveLastNameInPref(user.lastName).then(()=>{
            getLastNameFromPref().then((lastName)=>{
                console.log("=========lastname",lastName)
            })
        })
        }
    console.log(user, product)
    const LoginUser = async () => {
        setActivity(true)
         if(email == 'test@test.com' && password == '1234567'){
            console.log("===========loinside",user)
         await onUserLogin({ email:email , password:password}).then(()=>{
    
           }
         )
         setActivity(false)
         }else if(email != '' && password != ''){
            Alert.alert("Email And Password Not match")
            setEmail("");
            setPassword("");
            setActivity(false)
         }
         else{
            Alert.alert("Please Enter Email & Password")
            setActivity(false)
         }
    }
    return (
        <SafeAreaView style={styles.safeAreaStyle}>
            <ScrollView>
       <View style={{marginTop:'50%'}}>
       <TextInput
              style={styles.TextInputStyle}
              placeholder="Email"
              value={email}
              onChange={(e) => setEmail(e.nativeEvent.text)}
            />
              <TextInput
              style={styles.TextInputStyle}
              placeholder="Password"
              secureTextEntry={true}
              value={password}
              onChange={(e) => setPassword(e.nativeEvent.text)}
            />
            <TouchableOpacity style={styles.LoginButtonStyle}>
                <Text onPress={LoginUser}>Login</Text>
            </TouchableOpacity>
           {activity ? (<><ActivityIndicator
            size="large"
            color="#0000ff"
            style={{
              alignItems: 'center',
            }}
            animating={activity}
          /></>):(<>
          <Text></Text>
          </>)}
       </View>
       </ScrollView>
        </SafeAreaView>
        // <View style={{ flex: 1 }}>
        //     <Text style={{ marginLeft: 150 }}>
        //         Hello User!! {"\n"}
        //         {user !== undefined && <Text>{user.firstName}-{user.lastName}!!</Text>}
        //     </Text>
        //     <TouchableOpacity
        //         style={{
        //             height: 50,
        //             width: 250, marginTop: 100,
        //             marginBottom: 10,
        //             backgroundColor: "red", //#FF5733
        //             borderRadius: 30,
        //             justifyContent: 'center',
        //             alignItems: 'center',
        //             marginLeft: 70,
        //         }}
        //         onPress={() => onUserLogin({ email: 'test@test.com', password: '1234567' })}
        //     >
        //         <Text>User-Login</Text>
        //     </TouchableOpacity>
        //     <TouchableOpacity
        //         style={{
        //             height: 50,
        //             width: 250, marginTop: 40,
        //             marginBottom: 10,
        //             marginLeft: 70,
        //             backgroundColor: "red",
        //             borderRadius: 30,
        //             justifyContent: 'center',
        //             alignItems: 'center'
        //         }}
        //         onPress={() => onFetchProducet()}
        //     >
        //         <Text>Fetch-Data</Text>
        //     </TouchableOpacity>
        //     {product !== undefined && <Text style={{ marginLeft: 30, marginRight: 30, fontSize: 17 }}
        //     >{JSON.stringify(product)}</Text>}
        // </View>
    )
}
const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})
const LoginScreen = connect(mapStateToProps, { onUserLogin, onFetchProducet })(_LoginScreen)

export { LoginScreen }

const styles = StyleSheet.create({
      safeAreaStyle: {
    flex: 1,
    paddingBottom: '2%',
    backgroundColor: '#ffffff',
  },
  TextInputStyle:{
    height: 55,
    borderWidth: 1.5,
    borderColor: 'blue',
    marginLeft:'5%',
    marginRight:'5%',
    margin:'2%',
    padding:'2%'
  },
  LoginButtonStyle:{
    height: 50,
    width: 250, marginTop: 40,
    marginBottom: 10,
    marginLeft: '20%',
    backgroundColor: "red",
    borderRadius: 30,
    justifyContent: 'center',
    alignItems: 'center'
  },
  Inputsty:{
    height: 50,
    borderWidth: 1.5,
    borderColor: 'blue',
    margin:10
  }
})