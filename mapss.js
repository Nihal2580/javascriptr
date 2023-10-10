// map

const users = [
    {
        fname:"Nihal",
        lname:"kumar"

    },
    {
        fname:"Dheeraj",
        lname:"patel"
    }
];

const result= users.map((user)=>{

    return{
        fullname: user.fname + ' ' +user.lname
    }

})
console.log(result)