import type { Task } from '../types/task';

export function renderTaskList(tasks: Task[]): string {
  return tasks
    .map((task) => {
      return `
        <li class="task-item">
          <input 
            type="checkbox" 
            id="task-${task.id}" 
            data-id="${task.id}"
            ${task.completed ? 'checked' : ''}
          />
          <label for="task-${task.id}">${task.title}</label>
          <button class="delete-btn" data-id="${task.id}">🗑️</button>
        </li>
      `;
    })
    .join('');
}
