import { FetchTodosAction, DeleteTodoAction } from "../actions/todosActions";

export enum ActionTypes {
  fetchTodos,
  deleteTodo,
}

export type Action = FetchTodosAction | DeleteTodoAction;
