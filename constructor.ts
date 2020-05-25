class Pointer{
    x: number;
    y: number;

    constructor(x?:number, y?:number){  // Symbol ? is used to make parameter is optional
        this.x = x;
        this.y = y;
    }

    draw(){
        console.log("X: "+this.x+", Y: "+this.y);
    }

}

let pointer = new Pointer();
pointer.draw();