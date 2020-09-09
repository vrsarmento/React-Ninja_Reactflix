'use strict'

import firebase from 'firebase/app'
import 'firebase/database'

firebase.initializeApp({
  apiKey: 'AIzaSyAW2Sj_kWj4XHhqUYrF2QitlqZMDepYYZk',
  authDomain: 'reactflix-54418.firebaseapp.com',
  databaseURL: 'https://reactflix-54418.firebaseio.com',
  projectId: 'reactflix-54418',
  storageBucket: 'reactflix-54418.appspot.com',
  messagingSenderId: '226836717074',
  appId: '1:226836717074:web:d9590ad37089c34fd0c2cb'
})

const db = firebase.database()

export { db }
