const movies =[
    {
        name: "anarkali",
        budget: 25000
    },

    {
        name:"nirahua",
        budget:80000
    },
    {
        name:"jaiswal",
        budget:70000
    }
];

const total=movies.reduce((acu, movie)=>{
    acu =acu + movie.budget;

    return acu

},0);

console.log(total)