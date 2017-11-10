import firebase from 'firebase';

try {
    var config = {
        apiKey: "AIzaSyBKPOtspUyYT6GGt7QbguFPrCbCQemsAPU",
        authDomain: "mead-todo-app-bb13c.firebaseapp.com",
        databaseURL: "https://mead-todo-app-bb13c.firebaseio.com",
        projectId: "mead-todo-app-bb13c",
        storageBucket: "mead-todo-app-bb13c.appspot.com",
        messagingSenderId: "82549830321"
    };

  firebase.initializeApp(config);
} catch (e) {

}

export var firebaseRef = firebase.database().ref();
export default firebase;
