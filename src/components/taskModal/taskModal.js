import './taskModal.css';
import {useEffect, useState} from 'react';
import {fetchTasks} from '../../mock_requests/mock.tasks.fetch.js';
import { useDispatch } from 'react-redux';
import { taskAdded } from '../tasksListItem/tasksSlice.js';

function TaskModal (props) {
    const newDispatch = useDispatch();
    const {task, onClose, amendMode} = props;

    let headerText, btnText;

    const [taskName, setTaskName] = useState('');
    const [taskDescr, setTaskDescr] = useState('');
    const [deadlineDate, setDeadlineDate] = useState('');
    const [deadlineTime, setDeadlineTime] = useState('');

    useEffect(() => {
        setTaskName(task.name);
        setTaskDescr(task.descr);
        setDeadlineDate(task.deadlineDate);
        setDeadlineTime(task.deadlineTime);
    },[])

    if (amendMode) {
        headerText = 'Редактирование задачи';
        btnText = 'Изменить';
    } else {
        headerText = 'Добавить новую задачу';
        btnText = 'Добавить';
    }
    
    function handleSubmit (e) {
      if (amendMode) {
        e.preventDefault();
          const updTask = {
              id: task.id,
              name: taskName,
              descr: taskDescr,
              deadlineDate: deadlineDate,
              deadlineTime: deadlineTime,
              createdAt: task.createdAt,
              isDone: task.isDone
            }
      // Сюда добавить диспетчер редакса
          onClose();  
      } else {
        e.preventDefault();
          const newId = window.crypto.randomUUID();
          const creationDate = new Date();
          const newTask = {
              id: newId,
              name: taskName,
              descr: taskDescr,
              deadlineDate: deadlineDate,
              deadlineTime: deadlineTime,
              createdAt: creationDate.getTime(),
              isDone: false
            }
        fetchTasks(32, 'POST', newTask)
          .then((response) => {
            if (response) {
              newDispatch(taskAdded(newTask));
            }
          });
      }
    }

  return ( 
    <div className='modal-overlay'>
      <div className='add-task-cont'>
        <div className='add-task__header-cont'>
          <h2 className='add-task__header'>{headerText}</h2>
          <div className='add-task__close-cont'>
              <p className='add-task__close-sign'
                 onClick={onClose}>&#10006;
              </p>
          </div>
        </div>
        <div className='add-task__form-cont'>
          <form className='add-task__form'
                onSubmit={handleSubmit}
                id='addNewTask'>
            <input className='add-task__input input-name'
                   type='text'
                   placeholder='Название задачи'
                   value={taskName}
                   onChange={(e) => {setTaskName(e.target.value)}}
                   required/>

            <input className='add-task__input input-descr'
                   type='text'
                   placeholder='Описание задачи'
                   value={taskDescr}
                   onChange={(e) => {setTaskDescr(e.target.value)}}/>

            <div className='add-task__time-date-header'>
                Установите срок
            </div>
            <div className='add-task__time-date-cont'>
              <div className='date-input-cont'>
                <p className='date-input__header'>Дата</p>
                <input className='input-deadline'
                       type='date'
                       value={deadlineDate}
                       onChange={(e) => {setDeadlineDate(e.target.value)}}
                       required/>
              </div>
              <div className='time-input-cont'>
                <p className='time-input__header'>Время</p>
                <input className='input-deadline'
                       type='time'
                       value={deadlineTime}
                       onChange={(e) => {setDeadlineTime(e.target.value)}}
                       required/>
              </div>         
            </div>      
        </form>
        <div className='add-task__btn-cont'>
          <button className='add-task__btn'
                  type='submit'
                  form='addNewTask'>
             {btnText}
          </button>
        </div> 
        </div>
      </div>
    </div>
  )
}

export default TaskModal;