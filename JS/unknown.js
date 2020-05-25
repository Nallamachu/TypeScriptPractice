var myVariable1 = 10;

function hasName1(obj) {
    return !!obj &&
        typeof obj === "object" &&
        "name" in obj;
}
if (hasName1(myVariable1)) {
    console.log(myVariable1.name);
}
myVariable1.toString().toUpperCase();

hasName1("Subbareddy Nallamachu");