import Header from './components/Header'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import { useState } from 'react'


function App() {
  const [tasks, setTasks] = useState([{
    id: 1,
    name: "Doctors Appointment",
    day: 'Feb 6th at 1:00 pm',
    reminder: true
  },
  {
    id: 2,
    name: "Meeting at office",
    day: 'Feb 10th at 10:00 am',
    reminder: true
  },
  {
    id: 3,
    name: "Call carpenter",
    day: 'Feb 18th at 6:30 pm',
    reminder: false
  }
  ])

  const handleDelete = (id) => {
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleToggle = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, reminder: !task.reminder } : task
    ))
  }

  const handleAddTask = (task) => {
    console.log(task)
    setTasks([...tasks, task])
  }

  return (
    <div className="container">
      <Header title="Task Tracker" />
      <AddTask addTask={handleAddTask} />
      {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggle} /> : "No task to show"}
    </div>
  );
}
export default App;
