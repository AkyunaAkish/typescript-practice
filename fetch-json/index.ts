import axios from 'axios';

interface Todo {
  id: number;
  title: string;
  completed: boolean;
}

const fetchTodos = async () => {
  const { data } = await axios.get(
    'https://jsonplaceholder.typicode.com/todos/1'
  );

  const todo = data as Todo;
  logTodo(todo);
};

const logTodo = (todo: Todo) => {
  console.log('todo id', todo.id);
  console.log('todo title', todo.title);
  console.log('todo completed', todo.completed);
};

fetchTodos();
