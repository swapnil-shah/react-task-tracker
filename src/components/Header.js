import { useLocation } from 'react-router-dom'
import PropTypes from 'prop-types';
import Button from './Button'

const Header = ({ title, addTaskToggle, showAddTask }) => {
  const location = useLocation()
  return (
    <div className="header">
      <h1>{title}</h1>
      {location.pathname === '/' && <Button
        name={showAddTask ? "Close" : "Add"}
        color={showAddTask ? "red" : "green"}
        onClick={addTaskToggle}
        showAddTask={showAddTask} />}
    </div>
  )
}
Header.propTypes = {
  title: PropTypes.string
}

export default Header