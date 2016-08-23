import data from "./TaskCollection.js";

class Person {
  constructor({name}){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  set tasks(tasks = []) {
    this.tasks = tasks;
  }

  get tasks(){
    return this.tasks;
  }
}

let args = {name: "Amberish"};
let person = new Person(args);
person.getName();
person.tasks();
