/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
//change
// import PushNotification from "react-native-push-notification";
// PushNotification.configure({
//     onNotification: function (notification) {
//         console.log("NOTIFICATION:", notification);
//     },
//     requestPermissions: Platform.OS === 'Android'
// })

AppRegistry.registerComponent(appName, () => App);

//AppRegistry.registerComponent(appName, () => App);