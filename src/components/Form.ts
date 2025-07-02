export function renderForm(): string {
  return `
    <form id="task-form">
      <input
        type="text"
        id="task-input"
        placeholder="¿Qué tienes que hacer?"
        required
      />
      <button id="add-btn" type="submit">➕ Añadir</button>
    </form>
  `;
}
