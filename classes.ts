class Employee {
    employeeName: String;
    constructor(name : String){
        this.employeeName = name;
    }

    greet(){
        console.log(`Good Morning ${this.employeeName}`);
    }
}

let emp = new Employee("Subbareddy");
console.log(emp.employeeName);
emp.greet();

//Inheriting the Employee class into Manager class
class Manager extends Employee{
    constructor(managerName : String){
        super(managerName);
    }

    delegateWork(){
        console.log("Manager delegating tasks");
    }
}

let manager = new Manager("Nallamachu");
manager.delegateWork();
manager.greet();
// Will throw a compilation error if we declare the property as private or protected
console.log(manager.employeeName);