class Person {
  constructor(name, job, age) {
    this.name = name;
    this.job = job;
    this.age = age;
  }
  exersice() {
    console.log("Nobody truly enjoys running");
  }

  fetchJob() {
    console.log(`${this.name} is a ${this.job}`);
  }
}

class Programmer extends Person {
  constructor(name, job, age, languages) {
    super(name, job, age);
    this.languages = languages;
    this.busy = true;
  }

  completetask() {
    this.busy = false;
  }

  acceptNewTask() {
    this.busy = true;
  }

  offNewTask() {
    if (this.busy === true) {
      console.log(`${this.name} can't accept any new tasks right now.`);
    } else {
      console.log(`${this.name} would love to take on a new responsibility.`);
    }
  }
  learnLanguage(newSkill) {
    this.languages.push(newSkill);
  }
  listLanguage() {
    console.log(this.languages);
  }
}
