/* eslint-disable react/jsx-closing-bracket-location */
/* eslint-disable indent */
import { React } from 'react';
import context from '../core/context';
import TodoManager from '../services/TodoManager';

const clearButton = () =>
(TodoManager.hasNoTodos(context.state.todos)

? null
: <button
		onClick={ context.actions.clearCompleted }
			>Clear Completed
</button>);

export default clearButton;
