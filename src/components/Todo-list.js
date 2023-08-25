import React, { useState } from 'react';

const ToDoList = () => {
  const [tasks, setTasks] = useState([]);
  const [newTask, setNewTask] = useState('');

  const handleAddTask = () => {
    if (newTask.trim() !== '') {
      setTasks([...tasks, { text: newTask, completed: false }]);
      setNewTask('');
    }
  };

  const handleToggleComplete = index => {
    const updatedTasks = [...tasks];
    updatedTasks[index].completed = !updatedTasks[index].completed;
    setTasks(updatedTasks);
  };

  const handleRemoveTask = index => {
    const updatedTasks = tasks.filter((task, i) => i !== index);
    setTasks(updatedTasks);
  };

  const totalTasks = tasks.length;
  const completedTasks = tasks.filter(task => task.completed).length;

  return (
    <div id='todo-container'>
      <h2 id="todo-heading">To-Do List</h2>
      <input
        type="text"
        value={newTask}
        onChange={e => setNewTask(e.target.value)}
        placeholder="Enter a new task"
        id="task-input"
      />
      <button id='addtask' onClick={handleAddTask}>Add Task</button>
      <ul id='list-container'>
        {tasks.map((task, index) => (
          <li key={index}>
            <input
              type="checkbox"
              checked={task.completed}
              onChange={() => handleToggleComplete(index)}
              id='checkbox'
            />
            <span id='completed-task' className={task.completed ? 'completed' : ''}>{task.text}</span>
            <button id='remove-button'onClick={() => handleRemoveTask(index)}>Remove</button>
          </li>
        ))}
      </ul>
      <div id='task-container'>
      <p >Total tasks: {totalTasks}</p>
      <p>Completed tasks: {completedTasks}</p>
      </div>
    </div>
  );
};

export default ToDoList;
