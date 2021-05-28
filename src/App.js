import { React, useEffect } from 'react';
import './App.css';
import context from './core/context';
import SampleService from './services/sample';
import TodoInput from './components/TodoInput';
import AddTodo from './components/AddTodo';
import TodoList from './components/TodoList';
import ToggleAllButton from './components/toggleAllButton';

const App = () => {
	useEffect(SampleService.sayHai, []);
	// eslint-disable-next-line no-console
	console.log(context.state);

	return (
		<div className="App">
			<div>{ ToggleAllButton() }
				  { TodoInput() }</div>
			<div>{ AddTodo() }</div>
			<div>{ TodoList() }</div>
		</div>
	);
};

export default App;
