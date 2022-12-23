// Class keyword 
// in Js classes are fake
class Createuser {
    constructor (firstname, lastname , address , age ){
        console.log("constructed called ")
        this.firstname = firstname;
        this.lastname = lastname;
        this.age=age;
        this.address = address;
        
    }
    about(){
        return `my current age is  ${this.age}`
    }
    is18(){
        return this.age >= 18
    }
}

const user1  = new Createuser("Aayush" , "chouhan"  , "Ganshpura ", 78 )
console.log(user1.about())

// note :
// Without new keyword you can'nt invoke the constructor        
// practice question with inheritance
const prompt = require("prompt-sync")();
class animals{
    constructor(name, age){
        this.name = name;
        this.age = age;
    }
    aboutAnimals(){
        return `${this.name}very cute animal `
    }
    isCuteMore(){
        return this.age<=1;
    }
    aboutCutness(){
        console.log("cutest aanimls")
    }
}

class dog extends animals{
    
}
const name1 =  prompt("Enter the name of anmimls")
const aage =  prompt("Enter the age of anmimls")
const tommy = new dog(name1 , aage)
console.log(tommy)