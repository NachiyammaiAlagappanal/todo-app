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
const removeTodo = ({ state }, todo) => ({
	todos: TodoManager.removeTodo(state.todos, todo),
});

const toggleTodos = (context, isComplete) => ({
	todos: TodoManager.toggleTodos(context.state.todos, isComplete),
});

const clearCompleted = ({ state }) => ({
	todos: TodoManager.clearCompleted(state.todos),
});
const actions = {
	updateInputValue,
	addTodo,
	toggleTodo,
	removeTodo,
	toggleTodos,
	clearCompleted,
};

export default actions;
