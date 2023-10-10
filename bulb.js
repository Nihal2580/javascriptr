

const bulbSwitch=document.querySelector('#bulbSwitch');

const bulb=document.querySelector('#bulb')

bulbSwitch.addEventListener('click', function(event){
   
    console.log(bulb.src);
    if(bulb.src.match('off')){
        bulb.src='./bulb-on.jpeg';
        bulbSwitch.innerHTML='Turn off'

    } else{
        bulb.src='./bulb-off.jpeg'
        bulbSwitch.innerHTML='Turn On'
    }


    


})