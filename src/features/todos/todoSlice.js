import { createSlice, nanoid } from '@reduxjs/toolkit';

const initialState = {
  todos: [],
};

export const todoSlice = createSlice({
  name: 'todos',
  initialState,
  reducers: {
    addTodo: (state, action) => {
      state.todos.push({ ...action.payload, id: nanoid() });
    },
    removeTodo: (state, action) => {
      state.todos = state.todos.filter((todo) => todo.id !== action.payload);
    },
    toggleTodo: (state, action) => {
      const todo = state.todos.find((todo) => todo.id === action.payload);
      if (todo) {
        state.todos = state.todos.map((t) =>
          t.id === action.payload ? { ...t, completed: !t.completed } : t
        );
      }
    },
    editTodo: (state, action) => {
      const { id, ...updatedTodo } = action.payload;
      const existingTodo = state.todos.find((todo) => todo.id === id);
      if (existingTodo) {
        Object.assign(existingTodo, updatedTodo);
      }
    },
  },
});

export const { addTodo, removeTodo, toggleTodo, editTodo } = todoSlice.actions;

export default todoSlice.reducer;