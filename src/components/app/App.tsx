import { useEffect, useState } from "react";
import Container from "../container/container";
import TodoList from "../todosList/todoList";

export type Todo = {
  userId: number;
  id: number;
  title: string;
  completed: boolean;
};

const App = () => {
  const [todos, setTodos] = useState<Todo[] | null>(null);

  useEffect(() => {
    const fetchTodos = async () => {
      try {
        const res = await fetch("https://jsonplaceholder.typicode.com/todos/");
        const data = await res.json();
        setTodos(data);
      } catch (error) {
        console.log(error);
      }
    };
    fetchTodos();
  }, []);

  return (
    <Container>
      <h2 style={{ textAlign: "center" }}>Hello React</h2>
      {!todos ? (
        <div style={{ textAlign: "center" }}>
          Sorry your list of todos isn't ready
        </div>
      ) : (
        <TodoList todos={todos} />
      )}
    </Container>
  );
};

export default App;
