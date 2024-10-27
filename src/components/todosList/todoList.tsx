import { Todo } from "../app/App";
import Container from "../container/container";

interface TodoListProps {
  todos: Todo[];
}

const TodoList = ({ todos }: TodoListProps) => {
  return (
    <Container>
      <ul style={{ textAlign: "center", listStyle: "none" }}>
        {todos?.map((todo) => (
          <li key={todo.id}>
            <h2>{todo.title}</h2>
            <p>{todo.completed}</p>
          </li>
        ))}
      </ul>
    </Container>
  );
};

export default TodoList;
