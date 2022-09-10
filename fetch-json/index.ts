import axios from "axios";

const fetchTodos = async () => {
  const { data } = await axios.get(
    "https://jsonplaceholder.typicode.com/todos/1"
  );

  console.log("data", data);
};

fetchTodos();
