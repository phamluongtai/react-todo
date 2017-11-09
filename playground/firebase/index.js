import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBKPOtspUyYT6GGt7QbguFPrCbCQemsAPU",
    authDomain: "mead-todo-app-bb13c.firebaseapp.com",
    databaseURL: "https://mead-todo-app-bb13c.firebaseio.com",
    projectId: "mead-todo-app-bb13c",
    storageBucket: "mead-todo-app-bb13c.appspot.com",
    messagingSenderId: "82549830321"
};

firebase.initializeApp(config);

firebase.database().ref().set({
  appName: 'Todo App'
});
