import '../assets/styles/tasksPlaceholder.css';

function TasksPlaceholder (props) {
  return (
    <div className="placeholder-cont">
      <p className="placeholder-text">
        {props.text}
      </p>
    </div>
  )
}

export default TasksPlaceholder;