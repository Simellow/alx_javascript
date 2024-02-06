#!/usr/bin/node
const request = require('request');

const apiUrl = 'https://jsonplaceholder.typicode.com/todos';

request(apiUrl, (error, response, body) => {
  if (error) {
    console.error('Error fetching data:', error.message);
    return;
  }

  const tasks = JSON.parse(body);
  const completedTasks = tasks.filter((task) => task.completed);

  // Create a map to count tasks by user ID
  const tasksByUser = new Map();
  completedTasks.forEach((task) => {
    const userId = task.userId;
    tasksByUser.set(userId, (tasksByUser.get(userId) || 0) + 1);
  });

  // Print the results
  tasksByUser.forEach((count, userId) => {
    console.log(`User ${userId} completed ${count} tasks.`);
  });
});