
// const chanel= new Promise((resolve,reject) =>{
//     return resolve("I love ding coding")
// });

// const chanelNme= async()=>{
//     return "do again some coding"
// }


// chanelNme().then((data)=>{
//     console.log(data)
// });

// chanel.then((data)=>{
//     console.log(data)
// });

const fetchData= async ()=>{
    const error=false

    if(error){
        throw "throw some error"
    }

    return new Promise((resolve)=>{
        setTimeout(()=>{
            resolve([1,2,3,4])
        },2000)
    })
}

async function processData(){
    try {
        const data= await fetchData();
        console.log(data)
    } catch (error) {
        console.log(error)
        
    }
}

processData()