/* eslint-disable no-mixed-spaces-and-tabs */
import context from '../core/context';
import { React } from 'react';
import TodoManager from '../services/TodoManager.js';

const ToggleAllButton = () => {
	const { todos } = context.state;
	const isChecked = TodoManager.getActiveCount(todos) === 0;
	const noTodos = TodoManager.getAllCount(todos) === 0;

	return noTodos
		? null
		: <input
			// eslint-disable-next-line react/jsx-indent-props
			type="checkbox"
			// eslint-disable-next-line react/jsx-indent-props
			checked={	isChecked	}
			// eslint-disable-next-line react/jsx-indent-props
			onChange={ () => context.actions.toggleTodos(!isChecked) }
			// eslint-disable-next-line react/jsx-indent-props
		  />;
};

export default ToggleAllButton;
