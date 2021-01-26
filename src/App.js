import Header from './components/Header'
import Tasks from './components/Tasks'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    text: "Doctors Appointment",
    day: 'Feb 6th at 1:00 pm',
    reminder: true
  },
  {
    id: 2,
    text: "Meeting at office",
    day: 'Feb 10th at 10:00 am',
    reminder: true
  },
  {
    id: 3,
    text: "Call carpenter",
    day: 'Feb 18th at 6:30 pm',
    reminder: false
  }
  ])
  return (
    <div className="container">
      <Header title="Task Tracker" />
      <Tasks tasks={tasks} />
    </div>
  );
}
export default App;
