import { tasksFetching, tasksFetched } from "../tasksListItem/tasksSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../mock_requests/mock.tasks.fetch";
import { useEffect } from "react";
import ListItem from "../listItem.js";
import './tasksList.css';

function TasksList () {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(tasksFetching());
    fetchTasks(32)
      .then((result) => {
        if (result) {
          dispatch(tasksFetched(result));
        } else {
          dispatch(tasksFetched(['empty']));
        }
      })
  }, []);
  // useDispatch(() => dispatch(tasksFetching()));
  const loadingStatus = useSelector((state) => state.tasksReducer.loadingStatus);
  const tasks = useSelector((state) => state.tasksReducer.tasks);
  console.log(loadingStatus, tasks);

  function createList (items) {
    return items.map((item) => {
      return <ListItem key={item.id}
      id={item.id}
      name={item.name}
      descr={item.descr}
      deadlineDate={item.deadlineDate}
      deadlineTime={item.deadlineTime}
      createdAt={item.createdAt}
      isDone={item.isDone}/>
    })
  }
  const content = loadingStatus === 'idle' ? <div> {createList(tasks)} </div> : <div className="loading-mode"> Загружаем важное...</div>;

  return (
    <div>
      {content}
      <button onClick={() => dispatch(tasksFetched())}>Click</button>
    </div>
  )
}

export default TasksList;