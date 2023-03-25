var ToDo = /** @class */ (function () {
    function ToDo(date, words) {
        this.words = [];
        this.date = date;
        this.words = words;
    }
    return ToDo;
}());
var ToDoList = /** @class */ (function () {
    function ToDoList() {
        this.todoList = [];
    }
    ToDoList.prototype.addToDoToList = function (todo) {
        var check = this.todoList.some(function (Todo) {
            return Todo.date === todo.date;
        });
        if (check === false) {
            this.todoList[this.todoList.length] = todo;
        }
        else
            console.log("Da co trong list");
    };
    ToDoList.prototype.deleteTodofromList = function (todo) {
        var _this = this;
        this.todoList.map(function (Todo, index) {
            if (Todo.date === todo.date && Todo.words === todo.words) {
                return _this.todoList.splice(index, 1);
            }
            // return console.log("this ToDo isn't on the list");
        });
    };
    return ToDoList;
}());
var todo1 = new ToDo(3, ['title', '1']);
var todo2 = new ToDo(5, ['title', '2']);
var todo3 = new ToDo(15, ['title', '3']);
var todo4 = new ToDo(10, ['title', '4']);
var todo5 = new ToDo(15, ['title', '5']);
var todolist = new ToDoList();
todolist.addToDoToList(todo1);
todolist.addToDoToList(todo2);
todolist.addToDoToList(todo3);
todolist.addToDoToList(todo4);
todolist.addToDoToList(todo5);
console.log(todolist.todoList);
todolist.deleteTodofromList(todo5);
todolist.deleteTodofromList(todo2);
console.log(todolist.todoList);
