'use strict'

import { db } from 'config/firebase'

// Read
const videos = db.ref('videos')
videos.on('value', (snapshot) => {
  console.log('snapshot: ', snapshot.val())
}, (error) => {
  console.log(error)
})

const cat = db.ref('categories')
cat.once('value').then((snapshot) => {
  console.log('snapshot: ', snapshot.val())
})

// Create
const video = videos.push()
video.set({ // O SET é um método destrutivo
  id: 'oNLJ2IUObV4',
  title: 'Vídeo incluído pela API'
})

// Update
const editVideo = videos.child('2')
editVideo.update({ // O UPDATE é mais cauteloso
  id: 'lulululu',
  title: 'Título do Vídeo 2 editado'
})

// Delete
videos.update({
  ['-MFrfSrOGQB-5FIIKx_V']: null
})

videos.child('-MFrdrps9uW1lpodNeEx').update({
  id: null,
  title: null
})

videos.child('-MFrhHo-_PN8hzaJKHAm').remove()
db.ref('videos/-MFrhHo-_PN8hzaJKHAm').remove()
