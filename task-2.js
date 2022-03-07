//2.Convert the UML diagram to Typescript class. - use number for double
class Circle{
    constructor(radius=1.0,color="red"){
        this.radius = radius;
        this.color = color;
    }
    toString(radius=this.radius){
        this.radius = radius;
        return `after converting to string ${(this.radius).toString()+(this.color).toString()}`
    }

    circle(){
        return `color is ${this.color} and radius is ${this.radius}`;
    }
    circle(radius){
        this.radius=radius;
        return `radius is ${this.radius}`;
    }
    circle(radius,color){
        this.radius=radius;
        this.color=color;
        return `the radius is ${this.radius} and color is ${this.color}`;
    }
    setRadius(radius=1.0){
        this.radius=radius;
    }
    getRadius(){
        return `the radius by get and set is ${this.radius}`;
    }
    setColor(color="blue"){
        this.color=color;
    }
    getColor(){
        return `the color by get and set is ${this.color}`;
    }

    getArea(){
        return `the area is ${(this.radius)*(this.radius)*4}`;
    }
    getCircumference(){
        return `the circumference is ${(this.radius)*2*(Math.PI)}`;
    }
}
let circ = new Circle(6,"black");

console.log(circ);

console.log(circ.circle()); //undefined since the medthod1 is overrided by method2 and by method3
console.log(circ.circle(5)); //radius is 5 and color is undefined because method2 is overrided by method 3
console.log(circ.circle(4,"yellow")); //radius is 4 and color is white executes with no issues.
circ.setRadius();
console.log(circ.getRadius()); //set radius to default to 1.0 and accessed by getRadius() method.
circ.setColor();
console.log(circ.getColor()); //set color to default red and accessed by getColor() method.
console.log(circ.toString(6));
console.log(circ.getArea()); 
console.log(circ.getCircumference());