import PropTypes from 'prop-types';

import Button from './Button'

const Header = ({ title, addTaskToggle, showAddTask }) => {
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

// {
//   "tasks": [
//     {
//       "id": 1,
//       "name": "Doctors Appointment",
//       "day": "Feb 6th at 1: 00 pm",
//       "reminder": true
//     },
//     {
//       "id": 2,
//       "name": "Meeting at office",
//       "day": "Feb 10th at 10: 00 am",
//       "reminder": true
//     },
//     {
//       "id": 3,
//       "name": "Call carpenter",
//       "day": "Feb 18th at 6: 30 pm",
//       "reminder": false
//     }
//   ]
// }