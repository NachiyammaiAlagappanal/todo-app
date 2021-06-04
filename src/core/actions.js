import TodoManager from '../services/TodoManager';
import TaskManager from '../services/TaskManager';
const updateInputValue = (dummy, input) => ({
	input,
});
const addTodo = ({ state }) => ({
	input: '',
	todos: TodoManager.addTodo(state.todos, state.input),
});
const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});
const removeTodo = ({ state }, todo) => ({
	todos: TodoManager.removeTodo(state.todos, todo),
});

const toggleTodos = (context, isComplete) => ({
	todos: TodoManager.toggleTodos(context.state.todos, isComplete),
});

const clearCompleted = ({ state }) => ({
	todos: TodoManager.clearCompleted(state.todos),
});
const setFilter = (context, filter) => ({
	filter,
});
const setEditing = (context, todo) => ({
	editing: todo,
	input: todo.text,
});
const editTodo = ({ state }) => ({
	input: '',
	editing: null,
	todos: TodoManager.editTodo(
		state.todos, state.editing, state.input
	),
});

const setTasks = (context, tasks) => ({
	tasks,
});

const removeTask = (context, task) => ({
	tasks: TaskManager.removeTask(context.state.tasks, task),
});
const addTask = ({ state }, task) => ({
	tasks: TaskManager.addTask(state.tasks, task),
});

const addTaskToTodo = ({ state }, task) => ({
	todos: TodoManager.addTodo(state.todos, task.text),
});

const actions = {
	updateInputValue,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	clearCompleted,
	setFilter,
	editTodo,
	setEditing,
	setTasks,
	removeTask,
	addTask,
	addTaskToTodo,
};

export default actions;
