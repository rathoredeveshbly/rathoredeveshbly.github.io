import firebase from 'firebase';
export const initializeFirebase = () => {
  firebase.initializeApp({
    apiKey: "AIzaSyBHdu6mAu0_CAxSqiwPxnxITV2elYPg88s",
    authDomain: "pwa-app-50470.firebaseapp.com",
    projectId: "pwa-app-50470",
    storageBucket: "pwa-app-50470.appspot.com",
    messagingSenderId: "388018224029",
    appId: "1:388018224029:web:8423266d4558f1b3090d74"
  });
}

export const askForPermissionToReceiveNotifications = async () => {
    try {
      const messaging = firebase.messaging();
      //firebase.messaging.Messaging.requestPermission()
    //   await messaging.requestPermission();
      const token = await messaging.getToken();
      console.log('Your token is:', token);
      
      return token;
    } catch (error) {
      console.error(error);
    }
  }