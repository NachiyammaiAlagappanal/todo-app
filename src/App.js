import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import TodoInput from './components/TodoInput';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ToggleAllButton from './components/toggleAllButton';
import clearButton from './components/clearButton';
import FilterBar from './components/filterBar.js';
import EditButton from './components/editButton';
const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			<div>{ ToggleAllButton() }
				  { TodoInput() }
				{ AddTodo() }
				{ EditButton() }</div>
			<div>{ TodoList() }</div>
			<div>{ clearButton() }</div>
			<div>{ FilterBar() }</div>
		</div>
	);
};

export default App;
