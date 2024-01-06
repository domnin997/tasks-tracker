import localforage from 'localforage';

const TASKS_PREFIX = 'TASKS_FOR_';

class TaskService {

async getTasks (userId) {
  const response = await localforage.getItem(`${TASKS_PREFIX}${userId}`);
  const output = response ? response : false;
  return output;
}

async setTask (userId, newTask) {
  const tasksArray = await localforage.getItem(`${TASKS_PREFIX}${userId}`);
  if (tasksArray) {
    tasksArray.push(newTask);
    await localforage.setItem(`${TASKS_PREFIX}${userId}`, tasksArray);
    return true;
  } else {
    const newTasksArray = [newTask];
    await localforage.setItem(`${TASKS_PREFIX}${userId}`, newTasksArray);
    return true;
  }
  
}

}
export const taskService = new TaskService();