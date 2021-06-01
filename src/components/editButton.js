import { React } from 'react';
import context from '../core/context';

const EditButton = () => <button
	disabled={ context.state.input === '' }
	// eslint-disable-next-line react/jsx-closing-bracket-location
	onClick={ context.actions.editTodo }>Ok</button>;

export default EditButton;
