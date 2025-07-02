# app-tareas
Es una aplicación de gestión de tareas desarrollada con Vite y TypeScript.

📖 Descripción
Una aplicación de gestión de tareas (To-Do App) desarrollada con Vite y TypeScript. Permite crear, marcar, filtrar, editar y eliminar tareas, añadir etiquetas y fechas de vencimiento, y mantener el estado en localStorage.
🚀 Características principales
1.	Añadir tareas con título, etiquetas y fecha de vencimiento.
2.	Marcar como completadas y visualizar estadísticas (total, completadas, pendientes).
3.	Filtrar por Todas, Completadas o Pendientes.
4.	Eliminar tareas individualmente o limpiar todas las completadas..
5.	Persistencia en localStorage.
🗂 Estructura del proyecto
todo-app/
├── index.html
├── tsconfig.json
├── vite.config.ts
├── global.d.ts
├── src/
│   ├── main.ts
│   ├── app.ts
│   ├── styles/
│   │   └── style.css
│   ├── components/
│   │   ├── Form.ts
│   │   └── TaskList.ts
│   ├── types/
│   │   └── task.ts
│   └── utils/
│       └── storage.ts
└── package.json
📦 Instalación y ejecución
1.	Clonar el repositorio:
2.	git clone https://github.com/tu-usuario/todo-app.git
3.	cd todo-app
4.	Instalar dependencias:
5.	npm install
6.	Iniciar el servidor de desarrollo:
7.	npm run dev
8.	Abrir en el navegador: http://localhost:5173/
