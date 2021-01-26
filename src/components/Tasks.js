import PropTypes from 'prop-types'
import Task from './Task'
const Tasks = ({ tasks }) => {
  return (
    <div>
      {tasks.map((task, index) => <Task key={index} task={task} />)}
    </div>
  )
}

Tasks.propTypes = {
  tasks: PropTypes.object.isRequired
}
export default Tasks
