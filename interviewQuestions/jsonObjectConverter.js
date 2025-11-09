// recursive approach
// function JSONObjectConverter(obj, str = '') {
//     let newObj = {};
   
   
   
//   for(let key in obj){
     
//         const newKey = str ? str+'.'+key : key;
     
     
    
//     if(typeof obj[key]=='object'){
       
//       if(Array.isArray(obj[key])){
         
//           for(let index = 0 ;index <obj[key].length;index++){
//           newObj={...newObj,...JSONObjectConverter(obj[key][index],`${newKey}[${index}]`)}
//           }
//       }
       
//       else{
    
//           newObj={...newObj,...JSONObjectConverter(obj[key],newKey)}
//       }
      
       
//     }
     
//     else{
       
//       newObj[newKey] = obj[key]
      
//     }
     
//   }
//   return newObj
    
// }

// function JSONObjectConverterIterative(obj) {
//     let newObj = {};
//     let stack = [{ obj, prefix: '' }];

//     while (stack.length > 0) {
//         let { obj, prefix } = stack.pop();

//         for (let key in obj) {
//             const newKey = prefix ? `${prefix}.${key}` : key;

//             if (typeof obj[key] === 'object' && obj[key] !== null) {
//                 if (Array.isArray(obj[key])) {
//                     obj[key].forEach((item, index) => {
//                         stack.push({ obj: item, prefix: `${newKey}[${index}]` });
//                     });
//                 } else {
//                     stack.push({ obj: obj[key], prefix: newKey });
//                 }
//             } else {
//                 newObj[newKey] = obj[key];
//             }
//         }
//     }

//     return newObj;
// }

let obj ={
    "user": {
        "id": 1,
        "name": "John",
        "address": {
            "city": "New York",
            "zipcode": {
                "prefix": 100,
                "suffix": 1
            }
        },
        "preferences": {
            "notifications": {
                "email": true,
                "sms": false
            },
            "theme": "dark"
        }
    },
    "posts": [
        {
            "id": 101,
            "title": "Hello World",
            "comments": [
                {
                    "user": "Alice",
                    "message": "Nice post!"
                },
                {
                    "user": "Bob",
                    "message": "I agree!"
                }
            ]
        },
        {
            "id": 102,
            "title": "Deep Dive",
            "comments": []
        }
    ]
}
console.log(JSONObjectConverterIterative(obj))