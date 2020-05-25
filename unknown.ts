let myVariable : unknown ;
myVariable = 10;

function hasName(obj: any): obj is {name: string}{
    return !!obj && 
        typeof obj === "object" &&
        "name" in obj
}

if(hasName(myVariable)){
    console.log(myVariable.name);
}

(myVariable as String).toUpperCase();