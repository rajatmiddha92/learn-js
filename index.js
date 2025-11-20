
// //1st code
// let t1=performance.now()
// for(let i=1;i<=100;i++){
//     let child= document.createElement('p')
//     child.innerText=`this is line no ${i}`
//     document.body.appendChild(child)
// }
// let t2=performance.now()
// console.log(t2-t1)  //0.5 

// //2nd code
// let t3=performance.now()
// let parent=document.createElement('div')
// for(let i=1;i<=100;i++){
//     let child= document.createElement('p')
//     child.innerText=`this is line no ${i}`
//     parent.appendChild(child)
// }
// document.body.appendChild(parent)
// let t4=performance.now()
// console.log(t4-t3)//0.09

// // //code 3
// // let t5=performance.now()
// // let fragment=document.createDocumentFragment()
// // for(let i=1;i<=100;i++){
// //     let child= document.createElement('p')
// //     child.innerText=`this is line no ${i}`
// //     fragment.appendChild(child)
// // }
// // document.body.appendChild(fragment)
// // let t6=performance.now()
// // console.log(t6-t5)


// import { createServer } from "http"

// createServer((req,res)=>{
//     res.writeHead(200,{"Content-Type":"text/html"})
//     res.end("hello world")
 
// }).listen(9000)






// const parent = {role:"Admin"};
// const user = Object.create(parent);

// user.age = 28;
// user.name = "Rajat";
// console.log(user)
// console.log(user.role);

