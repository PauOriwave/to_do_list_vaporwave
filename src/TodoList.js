import React from 'react';
import TodoItem from './TodoItem';

function TodoList({ tasks, deleteTask, toggleTaskCompleted }) {
  return (
    <ul>
      {tasks.map(task => (
        <TodoItem key={task.id} task={task} deleteTask={deleteTask} toggleTaskCompleted={toggleTaskCompleted} />
      ))}
    </ul>
  );
}

export default TodoList;
