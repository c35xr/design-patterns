
/* Module with c35xr */

//Before ES6

var Todo = (function(){
	//declare private variables adn/or functions
	var todoList = ["Study", "Clean my Room", "Walk dog"];
	//declare public variables and/or functions
	return {
		getTodoList : function(){
			return todoList;
		},
		addTodoItem : function(item){
			todoList.push(item);
		}
	}
});

var myTodoList = new Todo();

console.log(myTodoList.getTodoList());

myTodoList.addTodoItem("Read about design patterns");

console.log(myTodoList.getTodoList());








