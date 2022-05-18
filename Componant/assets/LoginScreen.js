import React from 'react'
import { View, Text, TouchableOpacity } from 'react-native'
import { connect } from 'react-redux'
import { onFetchProducet, onUserLogin } from '../assets'
const _LoginScreen = (props) => {

    const { userReducer, onFetchProducet, onUserLogin } = props;
    // console.log(userReducer)
    const { user, product } = userReducer;
    // console.log(user, product)
    return (
        <View style={{ flex: 1 }}>
            <Text style={{ marginLeft: 150 }}>
                Hello User!! {"\n"}
                {user !== undefined && <Text>{user.firstName}-{user.lastName}!!</Text>}
            </Text>
            <TouchableOpacity
                style={{
                    height: 50,
                    width: 250, marginTop: 100,
                    marginBottom: 10,
                    backgroundColor: "red", //#FF5733
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center',
                    marginLeft: 70,
                }}
                onPress={() => onUserLogin({ email: 'test@test.com', password: '1234567' })}
            >
                <Text>User-Login</Text>
            </TouchableOpacity>
            <TouchableOpacity
                style={{
                    height: 50,
                    width: 250, marginTop: 40,
                    marginBottom: 10,
                    marginLeft: 70,
                    backgroundColor: "red",
                    borderRadius: 30,
                    justifyContent: 'center',
                    alignItems: 'center'
                }}
                onPress={() => onFetchProducet()}
            >
                <Text>Fetch-Data</Text>
            </TouchableOpacity>
            {product !== undefined && <Text style={{ marginLeft: 30, marginRight: 30, fontSize: 17 }}
            >{JSON.stringify(product)}</Text>}
        </View>
    )
}
const mapStateToProps = (state) => ({
    userReducer: state.userReducer
})
const LoginScreen = connect(mapStateToProps, { onUserLogin, onFetchProducet })(_LoginScreen)

export { LoginScreen }