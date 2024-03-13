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