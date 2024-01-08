import { tasksFetching, tasksFetched } from "../tasksListItem/tasksSlice.js";
import { useDispatch, useSelector } from "react-redux";
import { fetchTasks } from "../../mock_requests/mock.tasks.fetch";
import { useEffect } from "react";
import ListItem from "../tasksListItem/tasksListItem.js";
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
 
  const loadingStatus = useSelector((state) => state.tasks.loadingStatus);
  const tasks = useSelector((state) => state.tasks.tasksList);

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
  const content = loadingStatus === 'idle' ? <>{createList(tasks)}</> : <div className="loading-mode"> Загружаем важное...</div>;

  return (
    <div>
      <ul className="tasks-list">
        <li className="tasks-list__head">
          <div className="tasks-list__head-mark"></div>
          <div className="tasks-list__head-name">Задача</div>
          <div className="tasks-list__head-descr">Описание</div>
          <div className="tasks-list__head-deadline">
            <div className="head-deadline__el-wrap">
              <p>Срок</p><p>&#8657;</p>
            </div>
          </div>
          <div className="tasks-list__head-created">
            <div className="head-deadline__el-wrap">
              <p>Создана</p><p>&#8657;</p>
            </div>
          </div>
            <div className="tasks-list__head-manage"></div>
        </li>
        {content}
      </ul> 
    </div>
  )
}

export default TasksList;