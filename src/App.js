import { useState, useEffect } from 'react'
import { BrowserRouter as Router, Route, } from 'react-router-dom'
import Header from './components/Header'
import Footer from './components/Footer'
import Tasks from './components/Tasks'
import AddTask from './components/AddTask'
import About from './components/About'


function App() {
  const [showAddTask, setShowAddTask] = useState(false)

  const [tasks, setTasks] = useState([])

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks()
      setTasks(tasksFromServer)
    }
    getTasks()
  }, [])

  const fetchTasks = async () => {
    const response = await fetch("http://localhost:5000/tasks")
    const data = await response.json()
    return data
  }

  const fetchTask = async (id) => {
    const response = await fetch(`http://localhost:5000/tasks/${id}`)
    const data = await response.json()
    return data
  }


  const handleDelete = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'Delete'
    })
    setTasks(tasks.filter(task => task.id !== id))
  }

  const handleToggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id)
    const updatedTask = { ...taskToToggle, reminder: !taskToToggle.reminder }

    const response = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: 'PUT',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(updatedTask)
    })
    const data = await response.json()
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, reminder: data.reminder } : task
    ))
  }

  const handleAddTask = async (task) => {
    const response = await fetch("http://localhost:5000/tasks", {
      method: 'POST',
      headers: {
        'Content-type': 'application/json'
      },
      body: JSON.stringify(task)
    })

    const data = await response.json()
    setTasks([...tasks, data])
  }

  const handleAddTaskToggle = () => {
    setShowAddTask(!showAddTask)
  }
  return (
    <Router>
      <div className="container">
        <Header title="Task Tracker" addTaskToggle={handleAddTaskToggle} showAddTask={showAddTask} />
        <Route
          path='/'
          exact
          render={(props) => (
            <>
              {showAddTask && <AddTask addTask={handleAddTask} />}
              {tasks.length > 0 ? <Tasks tasks={tasks} onDelete={handleDelete} onToggle={handleToggleReminder} /> : "No task to show"}
            </>
          )}
        />
        <Route path='/about' component={About} />
        <Footer />
      </div>
    </Router>
  );
}
export default App;
