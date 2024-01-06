import './tasksWorkspace.css';
import {useState, useEffect} from "react";
import ListManagePanel from "../listManagePanel.js";
import TasksList from "../tasksList/tasksList.js";

function TasksWorkspace () {

  const [isDeadlineAsc, setIsDeadlineAsc] = useState();
  const [isDeadlineActive, setisDeadlineActive] = useState();

  const [isCreatedDateAsc, setIsCreatedDateAsc] = useState();
  const [isCreatedDateActive, setIsCreatedDateActive] = useState();

  function onSortCreatedDate () {
    // dispatch({type: 'SORT_BY_CREATED', isAscend: isCreatedDateAsc});
    setIsCreatedDateAsc(!isCreatedDateAsc);
  }

  function onDedlineSort () {
    // dispatch({type: 'SORT_BY_DEADLINE', isAscend: isDeadlineAsc});
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

  return (
    <section className="tasks-container">
      <div className="tasks-container__header-wrap">
        <ListManagePanel/><h2 className="tasks-container__h2">Список ваших задач</h2>
      </div>
      <TasksList/>
    </section>
  )
}

export default TasksWorkspace;