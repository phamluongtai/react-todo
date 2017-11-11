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
