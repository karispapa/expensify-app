
// OBJECT DESTRUCTURING

// const book = {
//   title: 'Ego is the Enemy',
//   author: 'Ryan Holiday',
//   publisher: {
//     name: 'Penguin'
//   }
// };

// const {name: publisherName = 'Self-Published'} = book.publisher
 
// if(publisherName){
//   console.log(publisherName)
// }



//ARRAY DESTRUCTURING

const menuItem = ['Coffee (hot)', 'Ksh 30','Ksh 50','Ksh 70'];

const [coffee, , mediumPrice] = menuItem;

console.log(`A medium ${coffee} costs ${mediumPrice}`)


