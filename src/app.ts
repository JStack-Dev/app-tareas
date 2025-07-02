import { renderForm } from './components/Form';
import { renderTaskList } from './components/TaskList';
import { saveTasks, loadTasks } from './utils/storage';
import type { Task } from './types/task';

let currentFilter: 'all' | 'completed' | 'pending' = 'all';
let tasks: Task[] = loadTasks();

export function startApp(): void {
  const app = document.getElementById("app");
  if (!app) return;

  app.innerHTML = `
    <h1>📝 Lista de tareas</h1>
    <div id="todo-container">
      ${renderForm()}
      <div id="filter-container">
        <button data-filter="all" class="filter-btn active">Todas</button>
        <button data-filter="completed" class="filter-btn">Completadas</button>
        <button data-filter="pending" class="filter-btn">Pendientes</button>
      </div>
      <!-- Estadísticas y limpiar completadas -->
      <div id="stats-container">
        <span id="total-count">Total: 0</span>
        <span id="completed-count">Completadas: 0</span>
        <span id="pending-count">Pendientes: 0</span>
        <button id="clear-completed-btn">🧹 Limpiar completadas</button>
      </div>
      <ul id="task-list"></ul>
    </div>
  `;

  const form = document.getElementById("task-form") as HTMLFormElement;
  const input = document.getElementById("task-input") as HTMLInputElement;
  const filterButtons = document.querySelectorAll<HTMLButtonElement>('#filter-container .filter-btn');
  const taskList = document.getElementById("task-list") as HTMLUListElement;
  const totalCount = document.getElementById('total-count') as HTMLSpanElement;
  const completedCount = document.getElementById('completed-count') as HTMLSpanElement;
  const pendingCount = document.getElementById('pending-count') as HTMLSpanElement;
  const clearBtn = document.getElementById('clear-completed-btn') as HTMLButtonElement;

  // Filtros
  filterButtons.forEach((button) => {
    button.addEventListener('click', () => {
      currentFilter = button.dataset.filter as 'all' | 'completed' | 'pending';
      filterButtons.forEach(btn => btn.classList.remove('active'));
      button.classList.add('active');
      renderAndBindTasks();
    });
  });

  // Añadir tarea
  form.addEventListener("submit", (e: Event) => {
    e.preventDefault();
    const title = input.value.trim();
    if (!title) return;
    const newTask: Task = {
      id: crypto.randomUUID(), title, completed: false,
      tags: [],
      dueDate: null
    };
    tasks.push(newTask);
    input.value = "";
    saveTasks(tasks);
    renderAndBindTasks();
  });

  // Limpiar completadas
  clearBtn.addEventListener('click', () => {
    tasks = tasks.filter(t => !t.completed);
    saveTasks(tasks);
    renderAndBindTasks();
  });

  function renderAndBindTasks(): void {
    // Filtrar
    let tasksToRender: Task[];
    switch (currentFilter) {
      case 'completed':
        tasksToRender = tasks.filter(t => t.completed);
        break;
      case 'pending':
        tasksToRender = tasks.filter(t => !t.completed);
        break;
      default:
        tasksToRender = [...tasks];
    }

    // Estadísticas
    const total = tasks.length;
    const completed = tasks.filter(t => t.completed).length;
    const pending = total - completed;
    totalCount.textContent = `Total: ${total}`;
    completedCount.textContent = `Completadas: ${completed}`;
    pendingCount.textContent = `Pendientes: ${pending}`;

    // Render
    taskList.innerHTML = renderTaskList(tasksToRender);

    // Checkbox
    const checkboxes = taskList.querySelectorAll<HTMLInputElement>('input[type="checkbox"]');
    checkboxes.forEach(cb => {
      cb.addEventListener('change', () => {
        const id = cb.dataset.id;
        if (!id) return;
        const task = tasks.find(t => t.id === id);
        if (task) {
          task.completed = cb.checked;
          saveTasks(tasks);
          renderAndBindTasks();
        }
      });
    });

    // Eliminar
    const deleteButtons = taskList.querySelectorAll<HTMLButtonElement>('.delete-btn');
    deleteButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const id = btn.dataset.id;
        if (!id) return;
        tasks = tasks.filter(t => t.id !== id);
        saveTasks(tasks);
        renderAndBindTasks();
      });
    });
  }

  // Primer render
  renderAndBindTasks();
}
