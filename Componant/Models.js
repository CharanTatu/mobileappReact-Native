
import React, {useEffect, useState} from 'react';
import {
  Modal,
  StyleSheet,
  Text,
  Pressable,
  View,
  Image,
  ActivityIndicator,
  ScrollView,
  TouchableOpacity,
  Button,
  ToastAndroid
} from 'react-native';

const Models = ({navigation}) => {
  const [show, setShow] = useState(true);
  const [modalVisible, setModalVisible] = useState(false);
  const [citys, setCitys] = useState([]);

  useEffect(() => {
    getData();
  }, []);
  const getData = async () => {
    try{
     const result = await fetch('https://mtrip-dynamic.herokuapp.com/cities');
    const data = await result.json();
    setCitys(data);
    setShow(false);
    }catch(err){
     console.log("============error",err)
     ToastAndroid.showWithGravity(
      "Server Down Currentl,Api-Maintenance",
      ToastAndroid.LONG,
      ToastAndroid.BOTTOM
    );
    }
  };
  return (
    <View style={styles.centeredView}>
      <Button
        title="If User Web-View display"
        color="mediumspringgreen"
        onPress={() => navigation.navigate('webview')}></Button>
      <Modal animationType="slide" transparent={true} visible={modalVisible}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            {citys.map(({city, id}) => {
              return (
                <View key={id}>
                  <Text>{city}</Text>
                </View>
              );
            })}

            <Pressable
              style={[styles.button, styles.buttonClose]}
              onPress={() => setModalVisible(!modalVisible)}>
              <Text style={styles.textStyle}>Hide Citys</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
      <Pressable
        style={[styles.button, styles.buttonOpen]}
        onPress={() => setModalVisible(true)}>
        <Text style={styles.textStyle}>Show Citys</Text>
      </Pressable>
      <ScrollView>
        {show ? (
          <>
            <ActivityIndicator
              size="large"
              color="#0000ff"
              style={{
                alignItems: 'center',
                marginTop: '50%',
              }}
              animating={show}
            />
          </>
        ) : (
          <>
            {citys.map(({city, image, id}) => {
              return (
                <View key={id}>
                  <Text>{city}</Text>
                  <TouchableOpacity
                    onPress={() => navigation.navigate('Addvance', {id})}>
                    <Image source={{uri: image}} style={styles.itemre} />
                  </TouchableOpacity>
                </View>
              );
            })}
          </>
        )}
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  centeredView: {
    flex: 1,
    // justifyContent: "center",
    alignItems: 'center',
    marginTop: 22,
  },
  itemre: {
    backgroundColor: 'mediumspringgreen',
    padding: 20,
    marginVertical: 8,
    resizeMode: 'contain',
    height: 150,
    width: 350,
  },
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    padding: 35,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
});

export default Models;
