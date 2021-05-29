import { React } from 'react';
import context from '../core/context';

const clearButton = () =>
	<button onClick={ context.actions.clearCompleted }>Clear Completed</button>;

export default clearButton;
