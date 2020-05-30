  import * as firebase from 'firebase';
  
  
  // Your web app's Firebase configuration
  const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: process.env.FIREBASE_AUTH_DOMAIN,
    databaseURL: process.env.FIREBASE_DATABASE_URL,
    projectId: process.env.FIREBASE_PROJECT_ID,
    storageBucket: process.env.FIREBASE_STORAGE_BUCKET,
    messagingSenderId: process.env.FIREBASE_MESSAGING_SENDER_ID,
    appId: process.env.FIREBASE_APP_ID
  };
  // Initialize Firebase
  firebase.initializeApp(firebaseConfig);
  // firebase.analytics();

  const database = firebase.database();

  const googleAuthProvider = new firebase.auth.GoogleAuthProvider()

  googleAuthProvider.setCustomParameters({
    prompt: 'select_account'
  })
  export{firebase, googleAuthProvider, database as default} 

 
















  
/*
  // database.ref('Expenses').on('child_removed', (snapshot)=>{
  //   console.log(snapshot.key, snapshot.val())
  // })

  database.ref('Expenses').on('child_changed', (snapshot)=>{
    console.log(snapshot.key, snapshot.val())
  })
  // database.ref('expenses').child('expenses -1').set({
  //   id: '1',
  //     description: 'lunch',
  //     text: 'pilau',
  //     amount: 10000,
  //     createdAt: 0
  // })

  // expenses.map(el => {
  //   database.ref(`Expenses`).child(`${el.id}`).set(el)
  // });

  // database.ref('Expenses').on('value', (snapshot)=>{
  //   const expensesData = []
  //   snapshot.forEach(childSnapshot => {
  //     expensesData.push({
  //       id: childSnapshot.key,
  //       ...childSnapshot.val()
  //     })
  //   })

  //   console.log(expensesData)
  // })

  // database.ref().update({
  //   'Expenses/1/amount': 23000
  // })


/*  
// challenge 

database.ref().on('value', (snapshot)=>{
  const data = snapshot.val()
  console.log(`${data.name} is a ${data.job.title} at ${data.job.company}`)
})

setTimeout(()=>{
  
  database.ref().update({
    'job/company': 'Safaricom PLC' 
  })
  
}, 3500)

*/


/*
  database.ref().set({
    name: 'Sam Kariuki',
    age: 29,
    stressLevel: 7,
    location: {
      city: 'Semuto',
      District: 'Nakaseke'
    },
    job: {
      title: 'Electrical Engineer',
      company: 'HMH-Rainbow'
    }

  }).then(()=> 
  console.log('Data was saved')
  ).catch(e => console.log('error', e))
*/  


  // remove a property from firebase

  /*
   database.ref('age').remove()
    .then(()=>{
      console.log('Success field age removed ')
    })
   .catch(e => console.log('Remove failed', e))
  
  */


  // the above remove code can be done by set api
  /*
  database.ref('age').set(null)
  */
  


  
  // updating fields 
  /* 
  database.ref().update({
    stressLevel: 9,
    'job/company': 'Safaricom',
    location: {
      city: 'Nairobi',
      District: 'Westlands',
      center: 'HQ-1'

    }
  })
  */


  // fetch data from firebase once 
  /*
  database.ref('location/city')
    .once('value')
    .then((snapshot)=>{
        console.log(snapshot.val())
    })
    .catch(e => console('Data fetch unsuccessful', e))
  */ 

  // continous fetching on changes - subscribing to changes
  // on change listener

//   const onValueChange = database.ref().on('value', (snapshot)=>{
//     console.log(snapshot.val())
//   }, (e) => console.log('Error with data fetching', e));


//   setTimeout(()=>{
//       database.ref('age').set(30)
//       database.ref().update({
//         'job/title': 'Web developer'
//       })
//   },3500)
  
//   // unsubscribe from changes - Detach a callback previously attached with on()
//   setTimeout(()=>{
//     database.ref().off('value', onValueChange)
// },7000)

// setTimeout(()=>{
//   database.ref('age').set(35)
//   database.ref().update({
//     'job/title': 'Web developer'
//   })
// },10000)
 


  