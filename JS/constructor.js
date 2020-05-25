var Pointer1 = /** @class */ (function() {
    function Pointer1(x, y) {
        this.x = x;
        this.y = y;
    }
    Pointer1.prototype.draw = function() {
        console.log("X: " + this.x + ", Y: " + this.y);
    };
    return Pointer1;
}());
var pointer1 = new Pointer1();
pointer1.draw();