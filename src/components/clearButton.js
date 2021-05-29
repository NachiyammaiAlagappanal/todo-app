/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable indent */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/TodoManager';

const clearButton = () => {
	const { todos } = context.state;
	const noclearTodo = TodoManager.getClearCount(todos) === 0;

	return noclearTodo
		? null
		: <button
				onClick={ context.actions.clearCompleted }
			>
			Clear Completed
		</button>;
};

export default clearButton;
