import {Shape} from "./Shape";


class Triangle extends Shape{
     private _side1:number
     private _side2:number
     private _side3:number

    constructor(name: string, color: string, side1: number, side2: number, side3: number) {
        super(name, color);
        this._side1 = side1;
        this._side2 = side2;
        this._side3 = side3;
    }

    getSide1(): number {
        return this._side1;
    }

    setSide1(value: number) {
        this._side1 = value;
    }

    getSide2(): number {
        return this._side2;
    }

    setSide2(value: number) {
        this._side2 = value;
    }

    getSide3(): number {
        return this._side3;
    }

    setSide3(value: number) {
        this._side3 = value;
    }
    getPerimeter():number{
         if(this.checkTriangle()){
             return this._side1+this._side2+this._side3
         }
         else {
             return -1
         }
     }
    getArena():number{
        if(this.checkTriangle()){
            let p = this.getPerimeter() / 2;
            return Math.sqrt(p * (p - this._side1) * (p - this._side2) * (p - this._side3));
        }
        return -1
     }
    checkTriangle():boolean{
         if((this._side1+this._side2)>this._side3 && (this._side1+this._side3)>this._side2&&(this._side2+this._side3)>this._side1){
             return true
         }else {
             return false
         }
    }
    toString():string{
         if(this.checkTriangle()){
             return `this is Triangle has name: ${this.getName()},color:${this.getColor()},3 edges:${this._side1},${this._side2},${this._side3}`
         }else {
             return `this is not a Triangle`
         }
    }
}

let triangle1=new Triangle("Triangle","red",1,2,2)
console.log(triangle1.checkTriangle())
triangle1.setName("CCCCC")
console.log(triangle1.getArena())
console.log(triangle1.toString())



