import { rndString } from '@laufire/utils/random';
import config from '../core/config';

const { idLength } = config;

const getTodo = (text) => ({
	id: rndString(idLength),
	text: text,
	completed: false,
});

const addTodo = (todos, text) => todos.concat(getTodo(text));

const toggleTodo = (todos, data) => todos.map((todo) => (todo.id !== data.id
	? todo
	: {
		...todo,
		completed: !data.completed,
	}
));
const removeTodo = (todos, todo) =>
	todos.filter((selected) => selected.id !== todo.id);

const toggleTodos = (todos, isComplete) => todos.map((todo) => ({
	...todo,
	completed: isComplete,
}));
const getActiveCount = (todos) =>
	todos.filter((todo) => !todo.completed).length;

const getAllCount = (todos) => todos.length;

const clearCompleted = (todos) => todos.filter((todo) => !todo.completed);

const getClearCount = (todos) => todos.filter((todo) => todo.completed).length;

const filters = {
	all: () => true,
	active: (todo) => !todo.completed,
	completed: (todo) => todo.completed,
};
const filterTodo = (todos, filter) => todos.filter(filters[filter]);

const TodoManager = {
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	getActiveCount,
	getAllCount,
	clearCompleted,
	getClearCount,
	filterTodo,
};

export default TodoManager;
