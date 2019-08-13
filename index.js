// ### Problem 1:
// Create a GitHubRepository class with properties userName, fileName, descriptionOfRepository, and code. Create a function that prints all properties. Create an object of the class and use the function.
//
class GitHubRepository
{
    constructor(userName,fileName,descriptionOfRepository,code)
    {
        this.userNamep = userName;
        this.fileName = fileName;
        this.desriptionOfRepositoy = descriptionOfRepository;
        this.code = code;
    }

    printStuff()
    {
        console.log(this.userNamep);
        console.log(this.fileName);
        console.log(this.desriptionOfRepositoy);
        console.log(this.code);
    }

}

let myWork = new GitHubRepository("chrisawill","2019fall","Assignent drop","Name: Kids Nextdoor");


myWork.printStuff();









// ### Problem 2:
// Create a Movie class with the following properties: movieName, rating, and yearReleased. Create a method to change the rating and another one to change the yearReleased properties. Create an object of the class and use the two methods you created.
//

class movie
{
    constructor(movieName,rating,yearReleased)
    {
        this.movieName = movieName;
        this.rating = rating;
        this.yearReleased = yearReleased;
    }

    veiwing()
    {
        console.log(this.movieName);
        console.log(this.rating);
        console.log(this.yearReleased);

    }

}
let ticket = new movie("Bridge to Terabithia","87% Fresh","2007");
ticket.veiwing();
console.log(ticket);
ticket.rating = "100";
ticket.yearReleased = "Ahead of it's time.";


// ## Challenge 1:
// Create a Person class with three properties: name, weight, and height. Create a method that can calculate the BMI of a person using the formula below. Create an object of the class and use the function.
//
// BMI is  (weight / (height * height)) x 703. Weight is in pounds and height is in inches.

class Person
{
    constructor(name, weight, height)
    {
        this.name = name;
        this.weight = weight;
        this.height = height;
        this.BMI = 0;
    }

    userN()
    {
      console.log(this.name);
      console.log(this.weight);
      console.log(this.height);
    }

    BMI()
    {
        diet.BMI = ((diet.weight*(diet.weight/diet.height))             *703);
        console.log(diet.BMI);

    }
}
let diet = new Person("Christian","140","5'5",);
diet.userN();
















