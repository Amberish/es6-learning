import data from "./TaskCollection.js";

class Person {
  constructor({name}){
    this.name = name;
  }

  getName(){
    return this.name;
  }

  setTasks(tasks = []) {
    this.tasks = tasks;
  }

  getTasks(){
    return this.tasks;
  }
}

let args = {name: "Amberish"};
let person = new Person(args);
person.getName();
person.getTasks();

console.log(person.getName());
