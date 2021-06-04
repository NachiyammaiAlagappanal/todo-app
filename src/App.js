/* eslint-disable no-console */
import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todopane.js';
import TaskPane from './components/index.js';
import TaskManager from './services/TaskManager.js';
import ticker from './services/ticker.js';

const App = () => {
	useEffect(TaskManager.init, []);
	useEffect(ticker.start, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
