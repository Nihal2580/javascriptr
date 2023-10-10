function sayHello(){
    console.log("sayHello")
}

function sayHi(){
    console.log("hi eviry one")
}
function add(num1, num2, callback){
    // sayHello();
    console.log(num1+num2)
    callback();
    // callbackhi();
    // sayHi()
}

const a=5;
const b=40;
add(a,b, sayHello)
add(a,b, sayHi)
add(a,b, function(){
    console.log("bye .........")
})
