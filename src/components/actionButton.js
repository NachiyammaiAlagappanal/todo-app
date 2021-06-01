import context from '../core/context';
import AddTodo from './AddTodo.js';
import EditButton from './editButton.js';

const ActionButton = () => (context.state.editing
	? EditButton()
	: AddTodo()
);

export default ActionButton;
