//first 2 number represents the param type and last param type represents the return type
function add(a : number, b : number):number {
    return a+b;
}
console.log(add(10,20));

//Optional parameter in a function
function optionalParam(a : number, b? : number):number {
    if(b)
        return a+b;
    else
        return a;
}
console.log("optionalParam type : "+optionalParam(10));

//default value declaration type
function defaultValue(a : number, b : number = 10):number {
    return a+b;
}
console.log("defaultValue type 1: "+defaultValue(10,20));
console.log("defaultValue type 2: "+defaultValue(10));

//Object in function
function fullName(person : {firstName: string, lastName: string}){
    console.log(`${person.firstName} ${person.lastName}`);
}
let person = {
    firstName:"Subbareddy",
    lastName: "Nallamachu"
}

fullName(person);

//optional param in Object
interface Person1 {
    firstName1: string, 
    lastName1?: string
}

function personName(person1 : Person1){
    if(person1.lastName1)
        console.log(`${person1.firstName1} ${person1.lastName1}`);
    else
        console.log(`${person1.firstName1}`);
}
let person1 = {
    firstName1:"Subbareddy"
}

personName(person1);