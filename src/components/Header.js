import PropTypes from 'prop-types';

import Button from './Button'

const Header = ({ title, addTaskToggle, showAddTask }) => {
  console.log(showAddTask)
  return (
    <div className="header">
      <h1>{title}</h1>
      <Button
        name={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        onClick={addTaskToggle}
        showAddTask={showAddTask} />
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string
}

export default Header
