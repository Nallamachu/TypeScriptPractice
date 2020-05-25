let a : number;
let b : boolean;
let c : string;
let d : any;
let e : number[] = [1,2,3,4];
let f : any[] = [1, "Subbu", 2, false]; // Not a good practice

//Below is an alternate way of any type declaration
let g;
g = 10;
g: true;

//h = true will not allow in below because of h type considered as number
let h = 10;

//i can allow number | boolean type of variable to declare
let i : number | boolean;
i=20;
i=true;

const ColorRed = 0;
const ColorBlue = 1;
const ColorGreen = 2;

enum Colors {Red = 0, Blue = 1, Green = 2};

let backgroundColor = Colors.Blue;