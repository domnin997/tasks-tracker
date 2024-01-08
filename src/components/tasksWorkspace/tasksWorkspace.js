import './tasksWorkspace.css';
import ListManagePanel from '../tasksListManagePanel/tasksListManagePanel.js';
import TasksList from "../tasksList/tasksList.js";

function TasksWorkspace () {
  return (
    <section className="tasks-workspace">
      <h2 className="tasks-workspace__h2">
        Список ваших задач
      </h2>
      <ListManagePanel />
      <TasksList />
    </section>
  )
}

export default TasksWorkspace;