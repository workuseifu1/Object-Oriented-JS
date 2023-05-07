class Person {
  // moved here b/c it was identical
  constructor(name, quirkyFact,email, city, province) {
    this.name = name;
    this.quirkyFact = quirkyFact;
    this.email = email;
    this.city = city;
    this.province = province;
  }

  // moved here b/c it was identical
  bio() {
    return `My name is ${this.name}, my email address is ${this.email} and here's my quirky fact: ${this.quirkyFact} `;
  }
  location() {
    return `I am from ${this.city}, which is in ${this.province} province. `;
  }
}
class Student extends Person {
  // stays in Student class since it's specific to students only
  enroll(cohort) {
    this.cohort = cohort;
    this.Person =this.bio();
    }
  
}

class Mentor extends Person {
  // specific to mentors
  goOnShift() {
    this.onShift = true;
    this.Person =this.bio();
  }

  // specific to mentors
  goOffShift() {
    this.onShift = false;
    this.Person =this.bio();
  }
}
let Student1 = new Student("worku","Good","someemail@email.net","Winnipeg","MB");
console.log(Student1);
Student1.enroll("April 17 2023");
console.log(Student1.location());
// console.log(Student1);
// let Mentor1 = new Mentor("Instractor","Hard Working","someemail@email.net");
// console.log(Mentor1);
// Mentor1.goOnShift();
// console.log(Mentor1);
// Mentor1.goOffShift();
// console.log(Mentor1);
// let person = new Person("worku", "Like movie", "sojdfn@fks.net")
// console.log(person);