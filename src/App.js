import React, { useState, useEffect } from 'react';
import TodoList from './TodoList';
import FilterButtons from './FilterButtons';
import './App.css';


function App() {
  const [tasks, setTasks] = useState([]);
  const [filter, setFilter] = useState('all');

  useEffect(() => {
    const storedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (storedTasks) {
      setTasks(storedTasks);
    }
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (text) => {
    const newTask = { id: Date.now(), text, completed: false };
    setTasks([...tasks, newTask]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter(task => task.id !== id));
  };

  const toggleTaskCompleted = (id) => {
    setTasks(tasks.map(task =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const filteredTasks = tasks.filter(task => {
    if (filter === 'completed') return task.completed;
    if (filter === 'pending') return !task.completed;
    return true;
  });

  return (
    <div className="App">
      <h1>Lista de Tareas</h1>
      <input type="text" placeholder="Nueva tarea" onKeyDown={(e) => {
        if (e.key === 'Enter') addTask(e.target.value);
      }} />
      <FilterButtons filter={filter} setFilter={setFilter} />
      <TodoList tasks={filteredTasks} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} />
    </div>
  );
}

export default App;
