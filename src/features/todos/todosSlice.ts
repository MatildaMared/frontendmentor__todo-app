import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import type { RootState } from "../../app/store";
import { Todo } from "../../models/Todo";
import { TodoFilterState } from "../../models/TodoFilterState";

interface TodosState {
	todos: Todo[];
	filter: TodoFilterState;
}

const initialState: TodosState = {
	todos: [
		{
			id: "1",
			title: "Mata katten",
			completed: false,
		},
		{
			id: "2",
			title: "Springa en runda",
			completed: true,
		},
		{
			id: "3",
			title: "Städa toaletten",
			completed: false,
		},
		{
			id: "4",
			title: "Skriva matlista",
			completed: true,
		},
	],
	filter: TodoFilterState.All,
};

export const todosSlice = createSlice({
	name: "todos",
	initialState,
	reducers: {
		addTodo: (state, action: PayloadAction<Todo>) => {
			state.todos.push(action.payload);
		},
		removeTodo: (state, action: PayloadAction<string>) => {
			state.todos = state.todos.filter(
				(todo) => todo.id !== action.payload
			);
		},
		removeAllCompletedTodos: (state) => {
			state.todos = state.todos.filter((todo) => !todo.completed);
		},
		toggleTodo: (state, action: PayloadAction<string>) => {
			const todo = state.todos.find((todo) => todo.id === action.payload);
			if (todo) {
				todo.completed = !todo.completed;
			}
		},
		updateFilter: (state, action: PayloadAction<TodoFilterState>) => {
			state.filter = action.payload;
		},
	},
});

export const {
	addTodo,
	removeTodo,
	removeAllCompletedTodos,
	toggleTodo,
	updateFilter,
} = todosSlice.actions;

export const selectTodos = (state: RootState) => state.todos.todos;

export const selectActiveTodosCount = (state: RootState) => {
	return state.todos.todos.filter((todo: Todo) => !todo.completed).length;
};

export const selectFilter = (state: RootState) => state.todos.filter;

export const selectFilteredTodos = (state: RootState) => {
	const todos = selectTodos(state);
	switch (selectFilter(state)) {
		case TodoFilterState.All:
			return todos;
		case TodoFilterState.Active:
			return todos.filter((todo: Todo) => !todo.completed);
		case TodoFilterState.Completed:
			return todos.filter((todo: Todo) => todo.completed);
	}
};

export default todosSlice.reducer;
