import { React } from 'react';
import Todo from './todo';
import context from '../core/context';
import TodoManager from '../services/TodoManager.js';

const TodoList = () => {
	const { todos, filter } = context.state;
	const filteredTodo = TodoManager.filterTodo(todos, filter);

	return	<div>{	filteredTodo.map(Todo) }</div>;
};

export default TodoList;
