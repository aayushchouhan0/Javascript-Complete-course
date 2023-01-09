export default class person {
    constructor(firstName , lastname , age ){
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age
    }
    info(){
        console.log(this.firstName , this.lastname , this.age)
    }
}
export  class person2 {
    constructor(firstName , lastname , age ){
        this.firstName = firstName;
        this.lastname = lastname;
        this.age = age
    }
    info(){
        console.log(this.firstName , this.lastname , this.age)
    }
}

// default 
// First cheeze jah par isko import kar rah vha carli braches need nahi hoti ain 
// second humne default ka duplicte nahi bana sakte above eg but we make export 
// third jah par erson import hoga vha par hume variaable name kuch bh le sakte hain 
// fourth  humne named import bi kha sakte hain jo carli braches mein hain or if our folder in same variable so 
// we can a , karke next file ka bhi naam like sakte hain 