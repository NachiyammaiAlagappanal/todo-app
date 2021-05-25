import TodoManager from '../services/TodoManager';
const updateInputValue = (dummy, input) => ({
	input,
});
const addTodo = ({ state }) => ({
	todos: TodoManager.addTodo(state.todos, state.input),
});

const actions = {
	updateInputValue,
	addTodo,
};

export default actions;
