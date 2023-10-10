function getcheese(){
    return new Promise((resolve, rejected)=>{
        setTimeout(()=>{
            const chese="hmm"
            console.log("there is the chese", chese)
            resolve(chese)

        },50000)

    });
}

function getmakeDough(chese){
    return new Promise((resolve, rejected) =>{
        setTimeout(()=>{
        const makedoug=chese+" egg role"
        console.log("there is pizza",makedoug)
        resolve(makedoug)
    },5000)

    });
}

function bakePizza(makedoug){
    return new Promise((resolve, rejected)=>{
        setTimeout(() =>{
        const bake= makedoug +  "khal lo"

        console.log("there is a full pizza "), bake
        resolve(bake)
    },5000)
    })
}

getcheese()
.then((chese)=>{
    console.log("there is the chese", chese);
    return getmakeDough(chese)

})
.then((makedoug)=>{
    console.log("there is pizza",makedoug)
    return bakePizza(makedoug)

})

