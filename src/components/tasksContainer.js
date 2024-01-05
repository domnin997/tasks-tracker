import { useContext, useState, useEffect } from "react";
import {AppContext} from '../store/store.js';
import LSService from "../services/LSservice.js";
import '../assets/styles/tasksContainer.css';
import ListManagePanel from "./listManagePanel.js";
import TasksPlaceholder from "./tasksPlaceholder.js";
import ListItem from "./listItem.js";

function TasksContainer () {

    const { dispatch, state } = useContext(AppContext);

    const {updTasks} = LSService();
    updTasks(state.tasks);

    const [isDeadlineAsc, setIsDeadlineAsc] = useState();
    const [isDeadlineActive, setisDeadlineActive] = useState();

    const [isCreatedDateAsc, setIsCreatedDateAsc] = useState();
    const [isCreatedDateActive, setIsCreatedDateActive] = useState();

    function onSortCreatedDate () {
        dispatch({type: 'SORT_BY_CREATED', isAscend: isCreatedDateAsc});
        setIsCreatedDateAsc(!isCreatedDateAsc);
    }

    function onDedlineSort () {
        dispatch({type: 'SORT_BY_DEADLINE', isAscend: isDeadlineAsc});
        setIsDeadlineAsc(!isDeadlineAsc);
    }

    function onDeadlineArrowClick () {
        setIsCreatedDateActive(false);
        setisDeadlineActive(true);
        onDedlineSort();
    }

    function onCreatedArrowClick () {
        setisDeadlineActive(false);
        setIsCreatedDateActive(true);
        onSortCreatedDate();
    }

    useEffect(() => {
        setIsDeadlineAsc(false);
        setIsCreatedDateAsc(false);
        setIsCreatedDateActive(false);
        setisDeadlineActive(false);
      }, []);

    const emptyNotif = 'Ваш список пуст - добавьте новую задачу';
    
    let deadlineSortArrowClasses = 'deadline-sort-arrow';
    
    if (!isDeadlineAsc) {
        deadlineSortArrowClasses += ' descend';
    } 
    if (isDeadlineActive) {
        deadlineSortArrowClasses += ' active';
    }

    let createdSortArrowClasses = 'created-sort-arrow';

    if (!isCreatedDateAsc) {
        createdSortArrowClasses += ' descend';
    }
    if (isCreatedDateActive) {
        createdSortArrowClasses += ' active';
    }

    function createContent () {

      if (state.tasks.length > 0) {
        const items = state.tasks.map((task) => {
          return <ListItem key={task.id}
                           id={task.id}
                           name={task.name}
                           descr={task.descr}
                           deadlineDate={task.deadlineDate}
                           deadlineTime={task.deadlineTime}
                           createdAt={task.createdAt}
                           isDone={task.isDone}/>
        })
      return <> 
          <ul className="tasks-list">
            <li className="tasks-list__head">
              <div className="tasks-list__head-mark"></div>
              <div className="tasks-list__head-name">Задача</div>
              <div className="tasks-list__head-descr">Описание</div>
              <div className="tasks-list__head-deadline"
                   onClick={onDeadlineArrowClick}>
                  <div className="head-deadline__el-wrap">
                      <p>Срок</p><p className={deadlineSortArrowClasses}>&#8657;</p>
                  </div>
              </div>
              <div className="tasks-list__head-created"
                   onClick={onCreatedArrowClick}>
                  <div className="head-deadline__el-wrap">
                      <p>Создана</p><p className={createdSortArrowClasses}>&#8657;</p>
                  </div>
              </div>
              <div className="tasks-list__head-manage"></div>
            </li>
            {items}
          </ul>
      </>
            
      } else {
        return <TasksPlaceholder text={emptyNotif}/>   
      }
    }

    const content = createContent();

    return (
        <section className="tasks-container">
            <div className="tasks-container__header-wrap">
            <ListManagePanel/><h2 className="tasks-container__h2">Список ваших задач</h2>
            </div>
            {content}
        </section>
    )
}

export default TasksContainer;