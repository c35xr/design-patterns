import Todo from './libs/Todo-ES6';


var myTodoList = new Todo;

console.log(myTodoList.getTodoList());
myTodoList.addTodoItem("Learn more about design patterns");
console.log(myTodoList.getTodoList());