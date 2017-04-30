class Todo {
	constructor(){
		//private properties
		this.todoList = ["Study", "Clean my Room", "Walk dog"];
	}

	getTodoList(){
		return this.todoList.join(", ");
	}

	addTodoItem(item){
		this.todoList.push(item);
	}
}

export default Todo;