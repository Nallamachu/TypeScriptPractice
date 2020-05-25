//first 2 number represents the param type and last param type represents the return type
function add(a, b) {
    return a + b;
}
console.log(add(10, 20));
//Optional parameter in a function
function optionalParam(a, b) {
    if (b)
        return a + b;
    else
        return a;
}
console.log("optionalParam type : " + optionalParam(10));
//default value declaration type
function defaultValue(a, b) {
    if (b === void 0) { b = 10; }
    return a + b;
}
console.log("defaultValue type 1: " + defaultValue(10, 20));
console.log("defaultValue type 2: " + defaultValue(10));
//Object in function
function fullName(person) {
    console.log(person.firstName + " " + person.lastName);
}
var person = {
    firstName: "Subbareddy",
    lastName: "Nallamachu"
};
fullName(person);
//optional param in Object
function personName(person1) {
    if (person1.lastName1)
        console.log(person1.firstName1 + " " + person1.lastName1);
    else
        console.log("" + person1.firstName1);
}
var person1 = {
    firstName1: "Subbareddy"
};
personName(person1);
