const ticket= new Promise(function(resolve, rejecte){
    const isBorded=true
    if(isBorded){
        resolve("you completed join your train")
    }else{
        rejecte("you rejected")
    }
});
ticket
.then((data) =>{
    console.log("wohoo",data)
})

.catch((data) =>{
    console.log("oh",data)
})
.finally(()=>{
    console.log("you are free to run");
})
