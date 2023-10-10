//dom manipulation method

//1. getElement
// let heding= document.getElementById('heading');
// console.log(heading);


//2. get elemnt by getelementtag

// const human=document.getElementsByTagName('h1')
// console.log(human);


// 3. getelementByclassName
// const heading=document.getElementsByClassName('heading')
// console.log(heading)


//4. queryselecter

// const heading=document.querySelector('#heading')
// const headin=document.querySelector('.heading')
// console.log(heading)
// console.log(headin)

//5. queryselecterall

// const heading=document.querySelectorAll('.heading')
// console.log(heading);


// traverse dom

//1. parentnode

// const heading= document.querySelector('.heading')
// const parent=heading.parentNode
// console.log(parent)

//2. childNode
// const parent=document.querySelector('.parent');
// console.log(parent.childNodes);

//3. nextElementsibiling

// const heading=document.querySelector('.heading')
// console.log(heading.nextElementSibling)

//4.previousElementsibiling

// const SubHeading=document.querySelector('h3')
// console.log(SubHeading.previousElementSibling)


// manuplation

// const heading=document.querySelector('.heading')
// heading.innerHTML='nihal is good boy'
// heading.style.color='red'
// heading.fontSize='100px'
// heading.classList.add('title')

// createElement
// const heading=document.createElement('h2');
// heading.innerHTML='Dheeraj is aswome boy'
// heading.style.color='black'
// heading.classList.add('title')

// const parent=document.querySelector('.parent')
// parent.appendChild(heading);


// const SubHeading=document.createElement('h5');
// SubHeading.innerHTML='Sumer s v upar hi tum log'
// parent.appendChild(SubHeading)

// heading.insertAdjacentElement('afterend', SubHeading)

// console.log(heading)

// Dom Event

// const button=document.querySelector('#btn');
// const heading=document.querySelector('#heading');

// button.addEventListener('click', function(event){
//     heading.style.color='purple'
//     console.log('click button',event)

// })














