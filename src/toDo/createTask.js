class ToDoList {
    constructor(ul) {
      this.ul = ul;
      this.todos = [];
      this.isEdit = false;
      this.init();
    }
  
    init() {
      console.log('Init');
    }
  
    addToDo(todo) {
      this.todos.push(todo);
      const li = document.createElement('li');
      li.innerText = todo.desc;
      li.setAttribute('id', todo.id);
      li.classList.add();
      li.addEventListener('dblclick', () => {
        this.isEdit = !this.isEdit;
        console.log(this.isEdit);
      });
      ul.appendChild(li);
    }
    editToDo() {}
  }
  
  class ToDoItem {
    constructor(id, desc) {
      this.id = id;
      this.desc = desc;
      this.done = false;
    }
  }
  
  // Prepare DOM elements
  const ul = document.getElementById('todo-list');
  const form = document.getElementById('todo-form');
  
  // Add event listener to form
  form.addEventListener('submit', e => {
    e.preventDefault();
  });
  
  const newTodo = new ToDoItem(123, 'Learn JS');
  console.log(newTodo);
  
  const myTodoList = new ToDoList(ul);
  myTodoList.addToDo(newTodo);
  console.log(myTodoList);
  