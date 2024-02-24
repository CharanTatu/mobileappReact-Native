
import { GoogleSignin, statusCodes } from '@react-native-google-signin/google-signin';

GoogleSignin.configure({
      scopes: [
        'email',
        'profile',
      ], // what API you want to access on behalf of the user, default is email and profile
      offlineAccess: true,
      loginHint: '',
      forceConsentPrompt: false,
      webClientId:'463274600341-dgosm6sjh7rlm40ds9dn7aa5296bvaqe.apps.googleusercontent.com',
    });

export function makeGoogleLoginAndGetToken() {
    return new Promise((resolve) => {
      GoogleSignin.signIn()
        .then((user) => {
          GoogleSignin.getTokens()
            .then(({accessToken}) => {
              resolve({
                accessToken,
                userEmail: user.user.email,
                userName: user.user.name,
                photo: user.user.photo,
                success: true,
              });
              console.log('user success');
            })
            .catch((error) => {
              resolve({success: false});
              console.log('user token error = ', error);
            });
        })
        .catch((error) => {
          resolve({success: false});
          console.log('user login error info = ', error);
          if (error.code === statusCodes.SIGN_IN_CANCELLED) {
           // showToastNotifyBottom(error.toString());
          } else if (error.code === statusCodes.IN_PROGRESS) {
           // showToastNotifyBottom(error.toString());
          } else if (error.code === statusCodes.PLAY_SERVICES_NOT_AVAILABLE) {
            //showToastNotifyBottom(error.toString());
          }
        });
    });
  }