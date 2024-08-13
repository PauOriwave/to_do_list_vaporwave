import React from 'react';

function TodoItem({ task, deleteTask, toggleTaskCompleted }) {
  return (
    <li style={{ textDecoration: task.completed ? 'line-through' : 'none' }}>
      {task.text}
      <button onClick={() => toggleTaskCompleted(task.id)}>✔️</button>
      <button onClick={() => deleteTask(task.id)}>❌</button>
    </li>
  );
}

export default TodoItem;
