class animal{
    speak(){
        console.log("animal have different sound");
    }
}

class Cat extends animal{

}

class Dog extends animal{

}

let cat= new Cat();
let dog = new Dog();

cat.speak();
dog.speak();