// also refer to output based Question in same folder

// what is parallel routing in next js ?
// what is middleware in next js ?
// what is user action in react ?
// Can you define API routes in nextjs & how ?
// if we have 5 useffect and a console statement in evry like useeffect, effect 1,
// effect 2 and so on what is the sequence of the output what will print first

// design a system like when slack is offline and user send message
// then it will mail to a particular user about the message detail
// keep in mind you can use aws services and cost should be optimal
// and the user count of message is 1lac let say

// given the input.json in the folder structure
// convert it into this format output.json
// refer json_Challnge_Intervie.docx
// flat the deeply nested obj to single level object
// flattern deeeply nested arr to single array

let users = [
  {
    name: "John Doe",
    city: "New York",
    dob: "1990-05-14",
  },
  {
    name: "Alice Johnson",
    city: "Los Angeles",
    dob: "1985-09-23",
  },
  {
    name: "Michael Smith",
    city: "Chicago",
    dob: "1992-07-11",
  },
  {
    name: "Emma Davis",
    city: "Houston",
    dob: "1998-03-30",
  },
  {
    name: "David Martinez",
    city: "San Francisco",
    dob: "1989-12-17",
  },
];

// function sortArr(arr){
//   let sorted = [...arr]
//   sorted.forEach((data)=>{
//     data["join"]= data.dob.split("-").join("")
//   })

//   sorted.sort((a,b)=>b.join-a.join)

//   sorted.forEach((data)=>{
//     delete data.join
//   })

//   console.log(sorted)

// }

// sortArr(users)

// 1. sort this user arr based on dob
// with the result of 1st step
// 2nd follow up  change the key dob to birthYear and value will be only year
// 3rd group the data based on birthYear
// "1989":[{},{}]
// 4 you can use orignal array
// get Upcoming date and month from user array which is closest to current date and month.
// this all 4 are done by above arrr

//

// What is promise ? what will happen if is try to resolve promise with an err

// what is the difference between useMemo and useCallback
// what is memo in react

// write a polyfill for filter method

// console.log()

// write a mongo query to get topper from every dept assume there is a field
// called dept and percent from 0 to 100 in the collection students

// db.students.aggregate([
//   {
//     $sort: { percent: -1 }  // Sort students by percentage in descending order
//   },
//   {
//     $group: {
//       _id: "$dept",  // Group by department
//       topper: { $first: "$$ROOT" }  // Get the first student in each group (since they're sorted by percentage)
//     }
//   },
//   {
//     $project: {
//       _id: 0,  // Exclude the _id field
//       dept: "$_id",  // Include the department
//       topper: 1  // Include the topper details
//     }
//   }
// ])

let arr = [
  "0.2.2",
  "1.12.45",
  "1.23.45",
  "0.12.0",
  "0.2.3",
  "1.2.3",
  "1.2.4",
  "1.2.5",
  "1.2.6",
  "1.2.7",
  "1.2.8",
  "1.2.9",
  "0.12.0",
];

// sort the arr in ascending order

// arr.sort((a, b) => {
//   const aParts = a.split('.').map(Number);
//   const bParts = b.split('.').map(Number);

//   for (let i = 0; i < 3; i++) {
//     const aPart = aParts[i]
//     const bPart = bParts[i]

//     if (aPart !== bPart) {
//       return aPart - bPart;
//     }
//   }

//   return 0; // If all parts are equal
// });

// what is event loop in javascript

// what is nodejs ?

// how node is single threaded or event driven?

// what is callback hell ? 

// what is event loop in javascript

// how node js executes ?
//     
    // let arr=[60,30,10,67,40];
    // 1. Insert 70 at the 2nd Position without extra space
    // 2. reverse an array without extra space
    // function reverseArray(arr){
    //   let left = 0;
    //   let right = arr.length-1;
      
    //   while(left<right){
    //     [arr[left],arr[right]]=[arr[right],arr[left]]
    //     left++
    //     right--
    //   }
    //   return arr
    // }


    // two table 

    // one is user - userId,name,email(unique),phone,lid(ref-location table)
    // 2nd in location - lid,city,state,country
    // write a query to get user with specified mailid with location

  //   const userWithLocation = await User.findOne({ email })
  // .populate('lid') // Populates location reference
  // .exec();

    // 3rd table is subjects
    // subjectId,subjectName,status- passed/failed,userid(ref-user table)
    // write a query to get all subject with status passed/failed count

    // const statusCounts = await Subject.aggregate([
    //   {
    //     $match: {
    //       userId: userId
    //     }
    //   },
    //   {
    //     $group: {
    //       _id: '$status',
    //       count: { $sum: 1 }
    //     }
    //   }
    // ]);

    // what is loosely coupled and tightly coupled

    // what is useEffect & usecallback

    // write a timer function
    // write a stopwatch function
    // what is high order function