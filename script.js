Day-06

Question-03:

3). Write a “person” class to hold all the details?

class Person{
    constructor(name,age,email,description){
        this.name = name;
        this.age = age;
        this.email = email;
        this.description = description;
    }
    getName(){
        return this.name;
    }
    getAge(){
        return this.age;
    }
    getEmail(){
        return this.email;
    }
    getDescription(){
        return this.description;
    }
}
let obj=new Person("Monica",23,"monica@gmail.com","Software Developer");
console.log(obj.getName());
console.log(obj.getAge());
console.log(obj.getEmail());
console.log(obj.getDescription());

//output:

script.js:22 Monica
script.js:23 23
script.js:24 monica@gmail.com
script.js:25 Software Developer

1). https://github.com/rvsp/typescript-oops/blob/master/Practice/Movie.md

// 1. a) Write a constructor for the class Movie, which takes a String representing the title of the movie, 
// a String representing the studio, and a String representing the rating as its arguments, and sets the 
// respective class properties to these values.

class movie {
  constructor(title, studio, rating) {
    this.title = title;
    this.studio = studio;
    this.rating = rating;
  }

  getrating() {
    return "the rating is  " + this.rating;
  }
}


// b) The constructor for the class Movie will set the class property rating to "PG" as default when no rating is provided.
 
class movie {
    constructor(title, studio, rating){
        this.title = title;
        this.studio = studio;
        this.rating = "PG";
    }
}

// d) Write a piece of code that creates an instance of the class Movie with the title “Casino Royale”,
// the studio “Eon Productions”, and the rating “PG­13”

const CasinoRoyale = new movie( "Casino Royal", "Eon Productions", "PG13");


2). https://github.com/rvsp/typescript-oops/blob/master/Practice/class-circle.md

circle question 

class Circle {
  private radius: number;
  private color: string;
  constructor(radius: number, color: string) {
    this.radius = radius;
    this.color = color;
  }
  public getRadius(): number {
    return this.radius;
  }
  public setRadius(radius: number): void {
    this.radius = radius;
  }
  public getColor(): string {
    return this.color;
  }
  public setColor(color: string): void {
    this.color = color;
  }
  public getArea(): number {
    return Math.PI * this.radius * this.radius;
  }
  public getCircumference(): number {
    return 2 * Math.PI * this.radius;
  }

}
const circle = new Circle(5, "red");
//call any function example 
console.log(circle.getArea());


4) .write a class to calculate the uber price.


let baseFee = .44
let cities = ["Providence", "Boston", "New York", ]
let uberRates = [5, 10, 15]
// DRY = don't REPEAT yourself
//prompts to customer
let customerName = "Wendy" //prompt("What is your name?")
let customerCity = "Providence" //prompt("What is your city?")
//after the prompts, log to console customerName and welcome
console.log("Hello", customerName+ ", welcome to the Uber Rate Program")
//function that will getRate based on customerCity
function getRate(customerCity) {
  //uberRate function that will calculate the rate based on customerCity and index
  function uberRate(customerCity, index) {
    //calculate the final rate
    let finalRate = (uberRates[index]) * baseFee
    return finalRate
  }
  //log to the console customerCity and the finalRate after calling function uberRate and passing customerCity and index as parameters
  console.log(customerCity, "rate is:", uberRate(customerCity, cities.indexOf(customerCity)))
}
//call the getRate function passing in the customerCity arugment
getRate(customerCity)

//output:

//Hello Wendy, welcome to the Uber Rate Program
//19 Providence rate is: 2.2