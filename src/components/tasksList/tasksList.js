import { tasksFetching, tasksFetched } from "../tasksListItem/tasksSlice";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../mock_requests/mock.tasks.fetch";

function TasksList () {
  
  const tasks = useSelector((state) => state.tasks);
  const dispatch = useDispatch();

  return (
    <div></div>
  )
}

export default TasksList;