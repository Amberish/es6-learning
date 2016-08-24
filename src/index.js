import TaskCollection from "./TaskCollection.js";

class Person {
  constructor({name}){
    this.name = name;
  }

  getPersonTasks(){
    let msg = `${this.name} has following tasks:\n ${this.tasks}`;
    console.log(msg);
  }

  associateTask(collection){
    this.tasks = collection.tasks;
  }
}

let tasks = ["sleep", "eat", "drink"];
let collection = new TaskCollection(tasks);
let person = new Person({name: "Amberish"});
person.associateTask(collection);

person.getPersonTasks();
