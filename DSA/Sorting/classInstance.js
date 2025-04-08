class Student {
  constructor(firstName, lastName, year) {
    this.firstName = firstName;
    this.lastName = lastName;
    this.year = year;
    this.tardies = 0;
    this.scores = [];
  }
  fullname() {
    return `Your Full Name is ${this.firstName} ${this.lastName}`;
  }
  markLate() {
    this.tardies += 1;
    if (this.tardies >= 3) {
      return "YOU DONT WANT TO BE HERE, THEN DON' T BE HERE";
    }
    return `${this.firstName} ${this.lastName} has been late ${this.tardies} times!`;
  }
  addScore(score) {
    this.scores.push(score);
    return this.scores;
  }
  calculateAvg() {
    let sum = this.scores.reduce((acc, c) => acc + c, 0);
    return `${this.firstName} has an average of ${sum / this.scores.length}`;
  }
  static EnrollStudents() {
    return "ENROLLING STUDENTS!!";
  }
}

let firstStudent = new Student("Jeffrey", "Cai");
let secondStudent = new Student("Teresa", "Koo");

Student.EnrollStudents();
