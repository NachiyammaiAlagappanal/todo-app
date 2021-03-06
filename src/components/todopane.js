import { React } from 'react';
import TodoInput from './TodoInput';
import TodoList from './TodoList';
import ToggleAllButton from './toggleAllButton';
import ClearButton from './clearButton';
import FilterBar from './filterBar';
import ActionButton from './actionButton';

const style = {
	position: 'absolute',
	top: 0,
	left: 0,
	height: '100%',
	width: '50%',
	background: 'beige',
};

const TodoPane = () =>
	<div style={ style }>
		<h3>Todo</h3>
		<div>
			{ ToggleAllButton() }
			{ TodoInput() }
			{ ActionButton() }
		</div>
		<div>{ TodoList() }</div>
		<div>{ ClearButton() }</div>
		<div>{ FilterBar() }</div>
	</div>;

export default TodoPane;
