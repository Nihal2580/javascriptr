abstract class animal {

    nihal:string
    // age:number

    constructor(nihal:string) {
        this.nihal=nihal;
        // this.age

        
        
    }
    display():string{
        return "Nihal........"
    }
    abstract find(name:string):any;
}

class dog extends animal{
    dogid:number;
    constructor(name:string,dogid:number){
        super(name)
        this.dogid=dogid;
    }
    find(name: string) {
        return 'yor name is ${name}'
    }


}

let aku=new dog('Nihal',110);


console.log(aku.dogid);
console.log(aku.display());