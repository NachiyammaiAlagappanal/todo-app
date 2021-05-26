import TodoManager from '../services/TodoManager';
const updateInputValue = (dummy, input) => ({
	input,
});
const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
});
const toggleTodo = ({ state }, todo) => ({
	todos: TodoManager.toggleTodo(state.todos, todo),
});

const removeTodo = (context, todo) => ({
	todos: TodoManager.removeTodo(context.state.todos, todo),
});
const actions = {
	updateInputValue,
	addTodo,
	toggleTodo,
	removeTodo,
};

export default actions;
