import React from "react";
import { connect } from "react-redux";
import { Todo, fetchTodos, deleteTodo } from "../redux/actions";
import { StoreState } from "../redux/reducers";

interface HomeScreenProps {
  todos: Todo[];
  fetchTodos: () => void;
  deleteTodo: (id: number) => void;
}

const HomeScreen = (props: HomeScreenProps): JSX.Element => {
  const onButtonClick = (): void => {
    props.fetchTodos();
  };

  const onTodoClick = (id: number): void => {
    props.deleteTodo(id);
  };

  const renderList = (): JSX.Element[] => {
    return props.todos.map((todo: Todo) => {
      return (
        <div onClick={() => onTodoClick(todo.id)} key={todo.id}>
          {todo.title}
        </div>
      );
    });
  };

  return (
    <div>
      <button onClick={onButtonClick}>fetch</button>
      {renderList()}
    </div>
  );
};

const mapStateToProps = (state: StoreState): StoreState => {
  return state;
};

export const HomeScreenContainer = connect(mapStateToProps, {
  fetchTodos,
  deleteTodo,
})(HomeScreen);
