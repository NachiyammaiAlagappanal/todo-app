import { React, useEffect } from 'react';
import './App.css';
import TodoPane from './components/todopane.js';
import TaskPane from './components/index.js';
import TaskManager from './services/TaskManager.js';

const App = () => {
	useEffect(TaskManager.init, []);

	return (
		<div className="App">
			{ TodoPane() }
			{ TaskPane() }
		</div>
	);
};

export default App;
