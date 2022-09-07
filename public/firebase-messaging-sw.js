importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-app.js');
importScripts('https://www.gstatic.com/firebasejs/8.4.1/firebase-messaging.js');
firebase.initializeApp({
    apiKey: "AIzaSyBHdu6mAu0_CAxSqiwPxnxITV2elYPg88s",
    authDomain: "pwa-app-50470.firebaseapp.com",
    projectId: "pwa-app-50470",
    storageBucket: "pwa-app-50470.appspot.com",
    messagingSenderId: "388018224029",
    appId: "1:388018224029:web:8423266d4558f1b3090d74"
});
const messaging = firebase.messaging();
console.log("mesaging",messaging)