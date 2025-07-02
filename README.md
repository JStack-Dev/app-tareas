# app-tareas

📖 Descripción: 
Una aplicación de gestión de tareas  desarrollada con Vite y TypeScript. Permite crear, marcar, filtrar, editar y eliminar tareas, añadir etiquetas y fechas de vencimiento, y mantener el estado en localStorage, siguiendo buenas prácticas de estructura, modularización y mantenimiento de estado.
🚀 Características principales
1.	Añadir tareas con título, etiquetas y fecha de vencimiento.
2.	Marcar como completadas y visualizar estadísticas (total, completadas, pendientes).
3.	Filtrar por Todas, Completadas o Pendientes.
4.	Eliminar tareas individualmente o limpiar todas las completadas..
5.	Persistencia en localStorage.

## 🧠 Cómo funciona la aplicación por dentro
 🔄 Flujo general

1. **Carga inicial (`startApp`)**
   - Al arrancar la app, se renderiza la estructura principal del HTML dinámicamente dentro del elemento `#app`.
   - Se inyecta el formulario (`renderForm()`), los botones de filtros, estadísticas y la lista de tareas.

2. **Formulario (`renderForm`)**
   - Genera un formulario con un campo de texto (`#task-input`) y un botón de añadir (`#add-btn`).
   - Al enviar el formulario, se crea un nuevo objeto `Task` (con `id`, `title`, `completed`, `tags`, `dueDate`) y se guarda en el array `tasks`.
   - El formulario valida que no se envíen entradas vacías.

3. **Listado de tareas (`renderTaskList`)**
   - Recibe las tareas filtradas y devuelve un HTML con `<li>` por cada tarea.
   - Cada tarea tiene: texto, checkbox para marcar completada, y botón de eliminar.

4. **Filtrado de tareas**
   - Hay tres botones para filtrar: `Todas`, `Completadas`, `Pendientes`.
   - Se actualiza el estado `currentFilter` y se vuelve a renderizar la lista usando la función `renderAndBindTasks()`.

5. **Estadísticas**
   - Se actualizan dinámicamente en cada render: número total de tareas, completadas y pendientes.

6. **Eventos dinámicos**
   - Se asignan eventos a cada checkbox para marcar tareas como completadas.
   - También se vinculan eventos a los botones de eliminar para eliminar una tarea específica.
   - El botón "🧹 Limpiar completadas" elimina todas las tareas cuyo estado sea `completed`.

7. **Persistencia con `localStorage`**
   - Las tareas se guardan localmente con `saveTasks()` y se cargan al inicio con `loadTasks()`.
   - Así el usuario no pierde sus tareas al recargar la página.

---

### 📦 Organización de carpetas

src/
├── main.ts // Punto de entrada: llama a startApp()
├── app.ts // Controlador principal de la app
├── components/
│ ├── Form.ts // Función que renderiza el formulario
│ └── TaskList.ts // Función que renderiza el listado de tareas
├── utils/
│ └── storage.ts // Funciones para guardar y cargar en localStorage
├── types/
│ └── task.ts // Interfaz Task con su tipado
├── styles/
│ └── style.css // Estilos globales y personalizados



---

### ✅ Buenas prácticas implementadas

- ✅ Código modular y tipado con TypeScript
- ✅ Separación clara entre lógica, componentes y utilidades
- ✅ Uso de `crypto.randomUUID()` para generar IDs únicos
- ✅ Aplicación responsive con estilos bien organizados en `style.css`
- ✅ Comportamiento reactivo al marcar tareas y filtrar contenido
- ✅ Datos persistentes gracias a `localStorage`

---



📦 Instalación y ejecución
1.	Clonar el repositorio:
2.	git clone https://github.com/Jstack-Dev/app-tareas.git
3.	cd app-tareas
4.	Instalar dependencias:
5.	npm install
6.	Iniciar el servidor de desarrollo:
7.	npm run dev
8.	Abrir en el navegador: http://localhost:5173/
