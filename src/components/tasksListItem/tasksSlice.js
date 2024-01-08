import {createSlice} from "@reduxjs/toolkit";

const initialState = {
  tasksList: [],
  loadingStatus: 'idle',
}

const tasksSlice = createSlice({
  name: 'tasks',
  initialState,
  reducers: {
    tasksFetching: (state) => {
      state.loadingStatus = 'loading';
    },
    tasksFetched: (state, action) => {
      state.loadingStatus = 'idle';
      state.tasksList = action.payload;
    },
    taskAdded: (state, action) => {
      state.tasksList.push(action.payload);
    },
    taskDeleted: (state, action) => {
      state.tasksList = state.tasksList.filter((task) => task.id !== action.payload);
    }
  }
})

const {reducer, actions} = tasksSlice;

export default reducer;
export const {
  tasksFetching,
  tasksFetched,
  taskAdded,
  taskDeleted
} = actions;