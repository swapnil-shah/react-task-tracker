import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = ({ tasks, onDelete }) => {
  return (
    <div>
      {tasks.map((task, index) => <Task key={index} task={task} onDelete={onDelete} />)}
    </div>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.array.isRequired
}
export default Tasks
