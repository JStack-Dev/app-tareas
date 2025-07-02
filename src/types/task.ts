export interface Task {
  id: string;            // Un ID único
  title: string;         // El nombre de la tarea
  completed: boolean;    // Si la tarea está completada o no
  tags: string[];           // 🆕 lista de etiquetas
  dueDate: string | null;   // 🆕 fecha en formato YYYY-MM-DD o null
}
