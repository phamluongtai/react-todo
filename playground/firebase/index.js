import firebase from 'firebase';

var config = {
    apiKey: "AIzaSyBnvRgUTOicakqEwpzr0zPrScrq8GIdxHk",
    authDomain: "todo-app-dbed9.firebaseapp.com",
    databaseURL: "https://todo-app-dbed9.firebaseio.com",
    storageBucket: "todo-app-dbed9.appspot.com",
    messagingSenderId: "14525267972"
};

firebase.initializeApp(config);

var firebaseRef = firebase.database().ref();

firebaseRef.set({
    app: {
        name: 'Todo App',
        version: '1.0.0'
    },
    isRunning: true,
    user: {
        name: 'Andrew',
        age: 25
    }
});

var todosRef = firebaseRef.child('todos');

todosRef.on('child_added', (snapshot) => {
    console.log('New todo added', snapshot.key, snapshot.val());
});

todosRef.push({
    text: 'Todo 1'
});

todosRef.push({
    text: 'Todo 2'
});
