// Circle 
class Circle{
    construction(radius){
        this.radius = radius;
    }
    perimeter(){
        return 2 * Math.PI * this.radius;
    }
    area(){
        return Math.PI * this.radius**2
    }
}
const myCircle = new Circle(3);
console.log(myCircle.radius === 3);
console.log(myCircle.perimeter() > 18.849 && myCircle.perimeter() < 18.85);
console.log(myCircle.area() > 28.274 && myCircle.area() < 28.275);




// Triangle
class Triangle{
    constructor(side1, side2, side3){
        this.side1 = side1;
        this.side2 = side2;
        this.side3 = side3;
    }
    perimeter(){
        return this.side1 + this.side2 + this.side3;
    }
    isRightTriangle(){
        return this.side1**2 + this.side2**2 === this.side3**2
    }
}
const myTriangle = new Triangle(2, 5, 6);
console.log(myTriangle.side1 === 2);
console.log(myTriangle.side2 === 5);
console.log(myTriangle.side3 === 6);
console.log(myTriangle.perimeter() === 13);
console.log(myTriangle.isRightTriangle() === false);

const myRightTriangle = new Triangle(3,4,5);
console.log(myRightTriangle.side1 === 3);
console.log(myRightTriangle.side2 === 4);
console.log(myRightTriangle.side3 === 5);
console.log(myRightTriangle.perimeter() === 12);
console.log(myRightTriangle.isRightTriangle() === true);




// Rectangle 
class Rectangle{
    constructor(width, height){
        this.width = width;
        this.height = height;
    }
    perimeter(){
        return (this.width + this.height)*2
    }
    area(){
        return this.width * this.height
    }
}
const myRectangle = new Rectangle(3, 5);
console.log(myRectangle.width === 3);
console.log(myRectangle.height === 5);
console.log(myRectangle.perimeter() === 16);
console.log(myRectangle.area() === 15);




// Square
class Square extends Rectangle{
    constructor(width){
        return new Rectangle(width, width)
    }
}
const mySquare = new Square(2);
console.log(mySquare instanceof Rectangle === true);
console.log(mySquare.width === 2);
console.log(mySquare.height === 2);
console.log(mySquare.perimeter() === 8);
console.log(mySquare.area() === 4);