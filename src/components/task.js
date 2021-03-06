import { React } from 'react';
import context from '../core/context';

const removeButton = (task) =>
	<button onClick={ () => context.actions.removeTask(task) }>X</button>;

const AddTaskButton = (task) =>
	<button
		onClick={ () => {
			context.actions.addTaskToTodo(task);
			context.actions.removeTask(task);
		} }
	>+</button>;

const Task = (task) => {
	const { id, text } = task;

	return <div key={ id }>
		<span>{ text }</span>
		<span>{ AddTaskButton(task) }</span>
		<span>{ removeButton(task) }</span>
	</div>;
};

export default Task;
