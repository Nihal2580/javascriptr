//call back
// console.log("nihal");

// function getData(callBack){
//     setTimeout(()=>{
//         console.log("my name ois nihal kumar patel")
//         callBack()
//     },2000)
    
// }
// getData(setData)

// function setData(){
// console.log("set")
// console.log("kumar")
// }

// promise

// const ticket = new Promise((resolve, reject)=>{
//     const isBording=true;

//     if(isBording){
//         resolve("m bath gya train m")
//     } else{
//         reject(" tujhe sit nahi mila")
    
//     }
// });

// // handle the promises
// ticket
// .then((data)=>{
//     console.log("finally" + data)
    
// })
// .catch((data) =>{
//     console.log("ohh" + data)
// })


/*=========================================================================================*/


// function logget(){
//     console.log("get")
// }

// const piko = new Promise((resolve, reject)=>{

//     setTimeout(()=>{
//         console.log("set")
//         resolve()
//     },2000)

// })

// piko
// .then(()=>{
//     console.log("get")
//     logget()
// })



/*================ Multiple promises chaIN===============*/

// const coke=new Promise((resolve,reject)=>{

//     resolve([1,2,3,4,5,6])

// })

// coke
// .then((data)=>{

//     console.log(data)
//     return data.map((value)=>value *2

//     )

// })

// .then ((data)=>{
//     console.log(data)

//     return data.map((value)=> value-1)

// })

// .then ((data)=>{
//     console.log(data)

    
// })

const p1= Promise.reject("you solve your problem");
const p2= Promise.resolve("i will triger than block");
const p3= new Promise((resolve,reject)=>{
    setTimeout(()=>{
        // resolve("promise 3 sucess")
        reject("nk")

    },4000)

})

// promises all

const promises =  promise.all([p1,p2,p3]);

promises
.than((data)=>{
    console.log(data)
})

.catch((error)=> console.log(error));


