import { rndString } from '@laufire/utils/random';
import context from '../core/context';
import config from '../core/config';

const getTask = (text) => ({
	id: rndString(config.idLength),
	text: text,
});

const init = () =>
	context.actions.setTasks([
		getTask('Task 1'),
		getTask('Task 2'),
		getTask('Task 3'),
	]);
const addTask = (tasks, task) =>
	(tasks === '' ? tasks : tasks.concat(getTask(task)));
const removeTask = (tasks, task) =>
	tasks.filter((data) => data.id !== task.id);

const taskManager = () => ({
	init,
	removeTask,
	addTask,
});

const TaskManager = taskManager();

export default TaskManager;
