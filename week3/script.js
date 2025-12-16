Nijmi
nijmi._97046
Do Not Disturb

Nijmi — 18/11/2025 12:20
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: "Poppins", sans-serif;
}
Expand
message.txt
3 KB
<!DOCTYPE html>
<html>
<head>
	<meta charset="utf-8">
	<meta name="viewport" content="width=device-width, initial-scale=1">
	<title>My Portfolio website</title>
Expand
message.txt
3 KB
Unibha Neupane — 18/11/2025 12:25
<section class="contact-section">
    <h2>Contact Me</h2>

    <div class="contact-wrapper">
        <div class="contact-box">
            <p>Email: <a href="mailto:unibhaneupane16@gmail.com">unibhaneupane16@gmail.com</a></p>
            <p>Phone: <a href="tel:+9779745524263">+977 9745524263</a></p>
            <p>GitHub: <a href="https://github.com/nijmi" target="_blank">github.com/nijmi</a></p>
        </div>

        <div class="form-container">
            <h3>Send Me a Message</h3>
            <form action="#" method="post" class="contact-form">
                <input type="text" name="name" placeholder="Your Name" required>
                <input type="email" name="email" placeholder="Your Email" required>
                <textarea name="message" placeholder="Your Message" required></textarea>
                <button type="submit" class="form-btn">Send Message</button>
            </form>
        </div>
    </div>
</section>
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
    <title>Portfolio - Unibha Neupane</title>
Expand
message.txt
3 KB
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
Expand
message.txt
3 KB
Unibha Neupane — 18/11/2025 12:39
https://unibha.github.io/week1_portfolio/
Unibha Neupane — 24/11/2025 07:13
😊
Nijmi — 24/11/2025 07:13
1. Types of Inheritance
(1) Single Inheritance

Vehicle → Car

Example code:
Expand
message.txt
5 KB
Unibha Neupane — 24/11/2025 07:13
😚
Nijmi — 24/11/2025 07:30
package workshop2;
class Vehicle {
    void start() {
        System.out.println("Vehicle started");
    }
}

    class Car extends Vehicle {
        @Override
        void start() {
            System.out.println("Car started");
        }
    }

    public class q1{
        public static void main(String[] args) {
            Car c = new Car();
            c.start();
        }
    }
package workshop2;
class Person {
    void displayInfo() {
        System.out.println("This is person info");
    }
}

class Employee extends Person {
    void displayRole() {
        System.out.println("Employee role");
    }
}

class Manager extends Employee {
    void displayDepartment() {
        System.out.println("Management department");
    }
}

public class q2 {
    public static void main(String[] args) {
        Manager m = new Manager();
        m.displayInfo();
        m.displayRole();
        m.displayDepartment();
    }
}
Unibha Neupane — 24/11/2025 08:01
package workshop2;
abstract class Shape{
    public abstract void area();

    }
class Circle extends Shape{
    double radius;

    @Override
    public void area() {
        System.out.println("Area of Circle ="+(Math.PI * radius * radius));

    }

}
class Rectangle extends Shape{
    double length;
    double width;
    @Override
    public void area() {
        System.out.println("Area of Rectangle ="+(length*width));

    }

}
public class Q7 {

}
Nijmi — 24/11/2025 08:01
abstract class Shape {
    abstract double area();
}

class Circle extends Shape {
    double area() {
        return 3.14 * 5 * 5;
    }
}

class Rectangle extends Shape {
    double area() {
        return 10 * 4;
    }
}

public class Main {
    public static void main(String[] args) {
        System.out.println(new Circle().area());
        System.out.println(new Rectangle().area());
    }
}
package workshop2;

abstract class Shape {
    public abstract void area();
}

class Circle extends Shape {
    double radius;

    @Override
    public void area() {
        System.out.println("Area of Circle = " + (Math.PI * radius * radius));
    }
}

class Rectangle extends Shape {
    double length;
    double width;

    @Override
    public void area() {
        System.out.println("Area of Rectangle = " + (length * width));
    }
}

public class Q7 {
    public static void main(String[] args) {

        Circle c = new Circle();
        c.radius = 5;
        c.area();

        Rectangle r = new Rectangle();
        r.length = 10;
        r.width = 4;
        r.area();
    }
}
Unibha Neupane — 24/11/2025 08:05
package workshop2;
abstract class Shape{
    public abstract void area();

    }
class Circle extends Shape{
    double radius;

    @Override
    public void area() {
        System.out.println("Area of Circle ="+(Math.PI * radius * radius));

    }

}
class Rectangle extends Shape{
    double length;
    double width;
    @Override
    public void area() {
        System.out.println("Area of Rectangle ="+(length*width));

    }

}
public class Q7 {
     public static void main(String[] args) {

            Circle c = new Circle();
            c.radius = 5;
            c.area();

            Rectangle r = new Rectangle();
            r.length = 10;
            r.width = 4;
            r.area();
        }
    }
Unibha Neupane — 24/11/2025 08:20
package workshop2;

interface Readable {
            void read();
        }
        interface Writeable {
            void write();
        }

        class Book implements Readable, Writeable {
            public void read() { System.out.println("Book reading"); }
            public void write() { System.out.println("Book writing"); }
        }

        public class Q11 {
            public static void main(String[] args) {
                Book b = new Book();
                b.read();
                b.write();

            }
        }
Unibha Neupane — 24/11/2025 08:29
package workshop2;

interface A {
        default void read(){ 
            System.out.println("A is reading");
            }
    }

    interface B {
        default void read(){
            System.out.println("B is reading");
            }
    }

    class C implements A, B {

        public void read(){
            A.super.read();
            B.super.read();
            System.out.println("C");
        }
    }
    public class Q12 {
        public static void main(String[] args) {
            C c =new C();
            c.read();
        }
    }
Unibha Neupane — 25/11/2025 11:10
.contact-box {
    flex: 1;
    background: #fafafa;
    padding: 20px;
    border-radius: 12px;
    box-shadow: 0 4px 15px rgba(0,0,0,0.08);
}

.form-container {
    flex: 1;
    padding: 20px;
}

.contact-form {
    display: flex;
    flex-direction: column;
}

.contact-form input,
.contact-form textarea {
    width: 100%;
    padding: 12px;
    margin-bottom: 15px;
    border-radius: 10px;
    border: 1px solid #ccc;
    font-size: 15px;
}

.contact-form input:focus,
.contact-form textarea:focus {
    border-color: #af9950;
    box-shadow: 0 0 5px rgba(175, 153, 80, 0.3);
}
Unibha Neupane — 25/11/2025 11:51
#video-background {
    position: absolute;
    top: 0;
    left: 0;

    width: 100%;
    height: 100%;

    object-fit: cover;
    z-index: -1;
    opacity: 0.8;
}
<div class="card">
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
}
Expand
message.txt
3 KB
Unibha Neupane — 27/11/2025 07:44
🥹
Nijmi — 27/11/2025 07:45
const greet = (name) => "Hello " + name;
let movies = ["Kantara", "Spirited Away"];
movies.forEach(movie => console.log("Movie: " + movie));
Unibha Neupane — 27/11/2025 07:49
const movie = {
  title: "The Shawshank Redemption",
  year: 1994,

  getInfo: function() {
    return ${this.title} (${this.year});
  },

  delayedInfo: function() {
    setTimeout(() => {
      console.log(${this.title} was released in ${this.year});
    }, 1000);
  }
};

movie.delayedInfo();
Nijmi — 27/11/2025 08:11
const movies = [
    { id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 },
    { id: 2, title: "The Green Mile", genre: "Crime", year: 1999 },
    { id: 3, title: "12 Angry Men", genre: "Thriller", year: 1957 }
];

// Challenge 1: Find all Sci-Fi movies
const sciFiMovies = movies.filter(movie => movie.genre === "Sci-Fi");
console.log("Sci-Fi Movies:", sciFiMovies);

// Challenge 2: Get an array of just movie titles
const titles = movies.map(movie => movie.title);
console.log("Movie Titles:", titles);

// Challenge 3: Find the movie "Dune"
const duneMovie = movies.find(movie => movie.title === "Dune");
console.log("Dune Movie:", duneMovie); // returns undefined (no Dune in list)

// Challenge 4: Display each movie nicely
movies.forEach(movie => {
    console.log(${movie.title} (${movie.year}) - ${movie.genre});
});
Nijmi — 27/11/2025 08:58
// Old way
function displayMovie(movie) {
    return movie.title + " (" + movie.year + ") - " + movie.genre;
}

// New way: Use template literals and destructuring
function displayMovieModern(movie) {
     const {title,year,genre}=movie;
     console.log(${title} (${year}) - ${genre});
     // Template literal
}
displayMovie({ id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 });
(displayMovieModern({ id: 1, title: "Inception", genre: "Sci-Fi", year: 2010 });
Unibha Neupane — 28/11/2025 10:33
https://codeshare.io/24k47L
https://codeshare.io/24k47L
Nijmi — 28/11/2025 10:50
class AreaCalculator {

    // 1. Calculate area of Rectangle (length * width)
    public void calculateArea(double length, double width) {
        double area = length * width;
        System.out.println("Area of Rectangle = " + area);
    }

    // 2. Overloaded method for Square (side * side)
    public void calculateArea(double side) {
        double area = side * side;
        System.out.println("Area of Square = " + area);
    }

    // 3. Overloaded method for Triangle (0.5 * base * height)
    public void calculateArea(double base, double height, boolean triangle) {
        double area = 0.5 * base * height;
        System.out.println("Area of Triangle = " + area);
    }
}
public class Main {
    public static void main(String[] args) {

        AreaCalculator ac = new AreaCalculator();

        ac.calculateArea(10, 5);            // Rectangle
        ac.calculateArea(6);                // Square
        ac.calculateArea(8, 4, true);       // Triangle
    }
}
Nijmi — 28/11/2025 11:17
class Competitor {
    public double getOverallScore() {
        return 0.0;
    }
}

class Shooter extends Competitor {
    private double accuracy;
    private double speed;

    public Shooter(double accuracy, double speed) {
        this.accuracy = accuracy;
        this.speed = speed;
    }

    @Override
    public double getOverallScore() {
        return (accuracy * 0.7) + (speed * 0.3);
    }
}

public class Task3 {
    public static void main(String[] args) {

        Competitor c = new Shooter(92.5, 80); // 🔥 Upcasting Shooter → Competitor

        System.out.println("Shooter Overall Score = " + c.getOverallScore());
    }
}
class Competitor {
    String name;
    int age;

    public Competitor(String name, int age) {
        this.name = name;
        this.age = age;
    }

    public void showInfo() {
        System.out.println("Competitor Name: " + name);
        System.out.println("Age: " + age);
    }
}

class Runner extends Competitor {
    double raceTime;

    public Runner(String name, int age, double raceTime) {
        super(name, age);
        this.raceTime = raceTime;
    }

    @Override
    public void showInfo() {
        System.out.println("Runner Name: " + name);
        System.out.println("Age: " + age);
        System.out.println("Race Time: " + raceTime + " sec");
    }
}

class CompetitionManager {
    public void showDetails(Competitor c) {
        c.showInfo(); // 🔥 Calls Runner's overridden version when upcasted
    }
}

public class Task4 {
    public static void main(String[] args) {

        Competitor c1 = new Runner("Roshan", 19, 12.8); // 🔼 Upcast Runner → Competitor

        CompetitionManager cm = new CompetitionManager();
        cm.showDetails(c1); // 🔥 Polymorphism
    }
}
package tutorial;
class Competitor {
    public double getOverallScore() {
        return 0.0;
    }
}

class Shooter extends Competitor {
    private double accuracy;
    private double speed;

    public Shooter(double accuracy, double speed) {
        this.accuracy = accuracy;
        this.speed = speed;
    }

    @Override
    public double getOverallScore() {
        return (accuracy * 0.7) + (speed * 0.3);
    }
}

public class q3 {
    public static void main(String[] args) {
        Competitor c = new Shooter(92.5, 80);
        System.out.println("Shooter Overall Score = " + c.getOverallScore());
    }
}
Nijmi — 07/12/2025 10:19
Attachment file type: acrobat
workshop3_NijmiBajracharya.pdf
1.26 MB
Nijmi — 08/12/2025 07:18
public class ArithmeticExceptionDemo {
    public static void main(String[] args) {
        try {
            int number = 10;
            int result = number / 0;  // This will throw ArithmeticException
            System.out.println("Result: " + result);
        } 
        catch (ArithmeticException e) {
            System.out.println("Error: You cannot divide a number by zero!");
            System.out.println("Exception Message: " + e.getMessage());
        }

        System.out.println("Program continues normally...");
    }
}
Nijmi — 08/12/2025 07:46
import java.io.*;   // Needed for checked exception

public class ExceptionDemo {

    // Method that throws a checked exception
    static void readFile() throws FileNotFoundException {
        FileReader file = new FileReader("data.txt"); // File may not exist
        System.out.println("File opened successfully.");
    }

    public static void main(String[] args) {

        // 🔹 Unchecked Exception Example (ArithmeticException)
        try {
            int a = 10, b = 0;
            int result = a / b; // Runtime error (Divide by zero)
            System.out.println("Result: " + result);
        } catch (ArithmeticException e) {
            System.out.println("Unchecked Exception caught: " + e.getMessage());
        }

        // 🔹 Checked Exception Example (FileNotFoundException)
        try {
            readFile(); // Calling method that throws checked exception
        } catch (FileNotFoundException e) {
            System.out.println("Checked Exception caught: " + e.getMessage());
        }

        System.out.println("Program finished successfully!");
    }
}
Nijmi — 12/12/2025 10:25
hi
hello
Unibha Neupane — 12/12/2025 10:40
package tutorial5;

interface Flyable{
    void fly();
}

class Bird{
    public void eat() {
        System.out.println("Eating");

    }
}
class Sparrow extends Bird implements Flyable{
    @Override
    public void fly() {
        System.out.println("Sparrow is flying");
    }

}
class Penguin extends Bird{
    public void swim() {
        System.out.println("Penguin is swimming");

    }
}
public class LSPSolution {
    public static void letBirdFly(Flyable bird) {
        bird.fly();

    }
    public static void main(String[] args) {

    }

}
Nijmi — 12/12/2025 10:49
downcasting up casting
Nijmi — 12/12/2025 11:07
package tutorial;

interface NotificationService {
    void sendNotification(String message);
}

class EmailService implements NotificationService{
    @Override
    public void sendNotification(String message) {
        System.out.println("Sending Email: " + message);
    }
}

class SMSService implements NotificationService{
    @Override
    public void sendNotification(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

public class DIPSolution {
    public static void main(String[] args) {
        NotificationService emailService = new EmailService();
        Notification emailNotification = new Notification(emailService);
        emailNotification.notify("viva");

        NotificationService smsService= new SMSService();
        Notification smsNotification = new Notification(smsService);
        smsNotification.notify("weel1");
    }
}
Unibha Neupane — 12/12/2025 11:08
hii]
send
plss
send
here
Nijmi — 12/12/2025 11:09
package tutorial;

interface NotificationService {
    void sendNotification(String message);
}

class EmailService implements NotificationService{
    @Override
    public void sendNotification(String message) {
        System.out.println("Sending Email: " + message);
    }
}

class SMSService implements NotificationService{
    @Override
    public void sendNotification(String message) {
        System.out.println("Sending SMS: " + message);
    }
}

public class DIPSolution {
    public static void main(String[] args) {
        NotificationService emailService = new EmailService();
        Notification emailNotification = new Notification(emailService);
    }

}
package tutorial;

public class Notification {
    private NotificationService notificationService;

    public Notification(NotificationService notificationService) {
        this.notificationService = notificationService;
    }

    public void notify(String message) {
        notificationService.sendNotification(message);

    }

}
Unibha Neupane — 11:59
{
  "movies": [
    { "id": 1, "title": "Inception", "genre": "Sci-Fi", "year": 2010 },
    { "id": 2, "title": "Pulp Fiction", "genre": "Crime", "year": 1994 },
    { "id": 3, "title": "Dune", "genre": "Sci-Fi", "year": 2021 }
  ]
}
const movieListDiv = document.getElementById('movie-list');
const searchInput = document.getElementById('search-input');
const form = document.getElementById('add-movie-form');
let allMovies = [];

// Initialize movies from localStorage or movies.json
Expand
message.txt
5 KB
﻿
Unibha Neupane
unibhaneupane
const movieListDiv = document.getElementById('movie-list');
const searchInput = document.getElementById('search-input');
const form = document.getElementById('add-movie-form');
let allMovies = [];

// Initialize movies from localStorage or movies.json
function initializeMovies() {
  const storedMovies = localStorage.getItem('movies');
  if (storedMovies) {
    allMovies = JSON.parse(storedMovies);
  } else {
    // Load from movies.json if localStorage is empty
    fetch('movies.json')
      .then(response => response.json())
      .then(data => {
        allMovies = data.movies || [];
        saveMovies();
        renderMovies(allMovies);
      })
      .catch(error => {
        console.error('Error loading movies.json:', error);
        allMovies = [];
        renderMovies(allMovies);
      });
    return;
  }
  renderMovies(allMovies);
}

// Save movies to localStorage
function saveMovies() {
  localStorage.setItem('movies', JSON.stringify(allMovies));
}

function renderMovies(moviesToDisplay) {
  movieListDiv.innerHTML = '';
  if (moviesToDisplay.length === 0) {
    movieListDiv.innerHTML = '<p>No movies found matching your criteria.</p>';
    return;
  }
  moviesToDisplay.forEach(movie => {
    const movieElement = document.createElement('div');
    movieElement.classList.add('movie-item');
    // Escape quotes in movie data to prevent HTML injection
    const safeTitle = movie.title.replace(/'/g, "\\'");
    const safeGenre = movie.genre.replace(/'/g, "\\'");
    movieElement.innerHTML = `
      <p><strong>${movie.title}</strong> (${movie.year}) - ${movie.genre}</p>
      <button class="edit-btn" onclick="editMoviePrompt(${movie.id}, '${safeTitle}', ${movie.year}, '${safeGenre}')">Edit</button>
      <button class="delete-btn" onclick="deleteMovie(${movie.id})">Delete</button>
    `;
    movieListDiv.appendChild(movieElement);
  });
}

// Apply search filter and render movies
function applySearchFilter() {
  const searchTerm = searchInput.value.toLowerCase().trim();
  if (searchTerm === '') {
    renderMovies(allMovies);
  } else {
    const filteredMovies = allMovies.filter(movie => {
      const titleMatch = movie.title.toLowerCase().includes(searchTerm);
      const genreMatch = movie.genre.toLowerCase().includes(searchTerm);
      return titleMatch || genreMatch;
    });
    renderMovies(filteredMovies);
  }
}

function fetchMovies() {
  initializeMovies();
}

// Initialize on page load
fetchMovies();

searchInput.addEventListener('input', function () {
  applySearchFilter();
});

form.addEventListener('submit', function (event) {
  event.preventDefault();
  const titleInput = document.getElementById('title');
  const genreInput = document.getElementById('genre');
  const yearInput = document.getElementById('year');
  
  const newMovie = {
    id: allMovies.length > 0 ? Math.max(...allMovies.map(m => m.id)) + 1 : 1,
    title: titleInput.value.trim(),
    genre: genreInput.value.trim(),
    year: parseInt(yearInput.value)
  };

  if (!newMovie.title || !newMovie.year) {
    alert('Please fill in all required fields (Title and Year)');
    return;
  }

  allMovies.push(newMovie);
  saveMovies();
  // Apply current search filter (if any) after adding new movie
  applySearchFilter();
  form.reset();
});

function editMoviePrompt(id, currentTitle, currentYear, currentGenre) {
  const newTitle = prompt('Enter new Title:', currentTitle);
  if (newTitle === null) return; // User cancelled
  
  const newYearStr = prompt('Enter new Year:', currentYear);
  if (newYearStr === null) return; // User cancelled
  
  const newGenre = prompt('Enter new Genre:', currentGenre);
  if (newGenre === null) return; // User cancelled

  if (newTitle && newYearStr && newGenre) {
    const updatedMovie = {
      id: id,
      title: newTitle.trim(),
      year: parseInt(newYearStr),
      genre: newGenre.trim()
    };
    updateMovie(id, updatedMovie);
  }
}

function updateMovie(movieId, updatedMovieData) {
  const index = allMovies.findIndex(movie => movie.id === movieId);
  if (index !== -1) {
    allMovies[index] = updatedMovieData;
    saveMovies();
    // Apply current search filter (if any) after updating movie
    applySearchFilter();
  }
}

function deleteMovie(movieId) {
  if (confirm('Are you sure you want to delete this movie?')) {
    allMovies = allMovies.filter(movie => movie.id !== movieId);
    saveMovies();
    // Apply current search filter (if any) after deleting movie
    applySearchFilter();
  }
}
