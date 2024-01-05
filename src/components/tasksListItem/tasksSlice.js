import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  tasks: [],
  loadingStatus: 'idle',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducer: {
    tasksFetching: (state) => {
      state.loadingStatus = 'loading';
    },
    tasksFetched: (state, action) => {
      state.loadingStatus = 'idle',
      state.tasks = action.payload;
    },
    taskAdded: (state, action) => {
      state.tasks.push(action.payload);
    },
    taskDeleted: (state, action) => {
      state.tasks = state.tasks.filter((task) => task.id !== action.payload);
    }
  }
})

export const reducer = tasksSlice.reducer;
export const {
  tasksFetching,
  tasksFetched,
  taskAdded,
  taskDeleted
} = tasksSlice.actions;