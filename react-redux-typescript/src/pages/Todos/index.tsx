/* eslint-disable react-hooks/exhaustive-deps */
import './index.scss';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { Todo, fetchTodos, deleteTodo } from '../../reducers/actions';
import { StoreState } from '../../reducers';

export interface TodosProps {
  todos: Todo[];
  fetchTodos: Function; // since fetchTodos uses redux thunk, we have to use a generic Function type here or else TypeScript will throw an error because it's unaware of how thunk works
  deleteTodo: typeof deleteTodo;
}

const Todos = (props: TodosProps): JSX.Element => {
  const [loading, setIsLoading] = useState<boolean>(false);

  useEffect((): void => {
    setIsLoading(true);

    props.fetchTodos();
  }, []);

  useEffect(() => {
    setIsLoading(false);
  }, [props.todos]);

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return (
        <div key={todo.id} onClick={() => onTodoClick(todo.id)}>
          {todo.title}
        </div>
      );
    });
  };

  console.log(props.todos);

  return (
    <div className="todos">
      <h1>Todos</h1>

      <Link id="home-link" to="/">
        Home
      </Link>

      <div id="todos-container">
        {loading ? <h2>Loading...</h2> : renderList()}
      </div>
    </div>
  );
};

const mapStateToProps = (state: StoreState): { todos: Todo[] } => {
  return { todos: state.todos };
};

export default connect(mapStateToProps, { fetchTodos, deleteTodo })(Todos);
