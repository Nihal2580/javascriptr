class mom{
    constructor(){
        var name;
        var mark;
    }
    
    getName(){
        return this.name;
    }
    setName(name){
        return this.name=name
    }
    getMark(){
        this.mark
    }
    setMark(mark){
        // return this.mark=mark
        if(mark<0 || mark>45){
            console.log("invaled ")
        }else{
            this.mark=mark
        }
    }
}

let nom=new mom();

nom.setName("Nihal")
nom.setMark(80)

console.log(nom.getName())
console.log(nom.getMark())