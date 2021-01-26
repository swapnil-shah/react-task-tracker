import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = ({ tasks, onDelete, onToggle }) => {
  return (
    <div>
      {tasks.map((task, index) => <Task key={index} task={task} onDelete={onDelete} onToggle={onToggle} />)}
    </div>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}
export default Tasks
