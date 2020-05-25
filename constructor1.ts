class Pointers{

    constructor(private x?:number, private y?:number){  
        // Symbol ? is used to make parameter is optional
    }

    draw(){
        console.log("X: "+this.x+", Y: "+this.y);
    }

}

let pointers = new Pointers();
pointers.draw();