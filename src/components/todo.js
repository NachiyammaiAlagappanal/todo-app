/* eslint-disable no-console */
import { React } from 'react';
import context from '../core/context';

const sharedStyle = {
	height: '1em',
};
const completedStyle = {
	...sharedStyle,
	color: 'blue',
};

const activeStyle = {
	...sharedStyle,
	color: 'red',
};

const Todo = (todo) => {
	const { id, text, completed } = todo;
	// eslint-disable-next-line padding-line-between-statements
	console.log(todo);

	const style = completed ? completedStyle : activeStyle;

	return (
		<div key={ id } style={ style }>
			<span>
				<input
					type="checkbox"
					// eslint-disable-next-line react/destructuring-assignment
					defaultChecked={ todo.completed }
					onChange={ () => { context.actions.toggleTodo(todo); } }
				/>
			</span>
			<span>{ text }</span>
		</div>
	);
};

export default Todo;
