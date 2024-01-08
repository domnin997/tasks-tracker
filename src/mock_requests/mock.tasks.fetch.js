import {taskService} from '../services/tasks.service.js';

export const fetchTasks = async function (userId, requestType = 'GET', requestData = null) {
    if (requestType === 'GET') {
      return new Promise (resolve => {
          setTimeout(() => resolve (taskService.getTasks(userId)), 2000);
      })
    } else if (requestType === 'POST') {
      return new Promise (resolve => {
          setTimeout(() => resolve (taskService.setTask(userId, requestData)), 2000);
      })
    } else if (requestType === 'DELETE') {
      return new Promise (resolve => {
        setTimeout(() => resolve (taskService.deleteTask(userId, requestData)), 200);
      })
    }
}