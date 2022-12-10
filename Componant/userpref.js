import AsyncStorage from "@react-native-async-storage/async-storage";

export function saveTokenInPref(token) {
    return new Promise((resolve) => {
      AsyncStorage.setItem('token', token).then(() => {
        resolve(true);
      });
    });
  }

  export function getTokenFromPref() {
    return new Promise((resolve) => {
      AsyncStorage.getItem('token').then((token) => {
        if (token != null && token.length > 0) {
          resolve(token);
        } else {
          resolve(null);
        }
      });
    });
  }

  export function saveFirstNameInPref(firstName) {
    return new Promise((resolve) => {
      AsyncStorage.setItem('firstName', firstName).then(() => {
        resolve(true);
      });
    });
  }

  export function getFirstNameFromPref() {
    return new Promise((resolve) => {
      AsyncStorage.getItem('firstName').then((firstName) => {
        if (firstName != null && firstName.length > 0) {
          resolve(firstName);
        } else {
          resolve(null);
        }
      });
    });
  }

  export function saveLastNameInPref(lastName){
   return new Promise ((resolve)=>{
    AsyncStorage.setItem('lastName', lastName).then(() => {
        resolve(true);
      });
   })
  }
  export function getLastNameFromPref() {
    return new Promise((resolve) => {
      AsyncStorage.getItem('lastName').then((lastName) => {
        if (lastName != null && lastName.length > 0) {
          resolve(lastName);
        } else {
          resolve(null);
        }
      });
    });
  }