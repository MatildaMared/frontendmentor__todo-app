import { configureStore } from "@reduxjs/toolkit";
import todosReducer from "../features/todos/todosSlice";

const store = configureStore({
	reducer: {
		todos: todosReducer,
	},
});

store.subscribe(() => {
    const state = store.getState();
    const { todos } = state.todos;

    localStorage.setItem("todos", JSON.stringify(todos));
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
