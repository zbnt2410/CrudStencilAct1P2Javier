# Link del NPMJS
https://www.npmjs.com/package/crud-stencil-ac1-pa2

#link del GitHab


Stencil
```md
# CRUD Component en StencilJS

Este componente es una implementación de un CRUD (Crear, Leer, Actualizar, Eliminar) en StencilJS que interactúa con una API REST. Permite la gestión de una lista de tareas.

## Funcionalidades

- **Crear una nueva tarea:** El formulario en la parte superior permite introducir los datos de una nueva tarea. Al enviar el formulario, se realiza una petición POST a la API.
- **Leer todas las tareas:** El componente realiza una petición GET a la API para obtener la lista de tareas y las muestra en una tabla.
- **Editar una tarea existente:** Al hacer clic en el botón "Editar", los datos de la tarea se cargan en el formulario. Al modificar y enviar el formulario, se realiza una petición PUT para actualizar la tarea.
- **Eliminar una tarea:** Al hacer clic en el botón "Eliminar", se realiza una petición DELETE para borrar la tarea.

## Estructura del Código

### 1. Estado del Componente

```typescript
@State() tareas: any[] = [];
@State() tarea = {
  id: '',
  title: '',
  description: '',
  start_time: '',
  end_time: '',
};
tareas: Almacena la lista de tareas obtenida de la API.
tarea: Almacena los datos de la tarea actualmente en el formulario.
2. Ciclo de Vida del Componente
typescript
Mostrar siempre los detalles

componentWillLoad() {
  this.fetchTareas();
}
componentWillLoad(): Método que se ejecuta antes de que el componente se cargue en la página. Llama a fetchTareas para obtener las tareas de la API.
3. Métodos Principales
fetchTareas(): Realiza una petición GET para obtener todas las tareas.
createTarea(): Realiza una petición POST para crear una nueva tarea.
updateTarea(id): Realiza una petición PUT para actualizar una tarea existente.
deleteTarea(id): Realiza una petición DELETE para eliminar una tarea.
handleInputChange(event): Actualiza el estado tarea con los datos introducidos en el formulario.
resetForm(): Resetea el formulario después de crear o actualizar una tarea.
handleEditTarea(tarea): Carga los datos de una tarea en el formulario para su edición.
4. Renderizado
typescript
Mostrar siempre los detalles

render() {
  return (
    <div>
      <h1>Lista de Tareas</h1>
      <form 
        onSubmit={(e) => {
          e.preventDefault();
          this.tarea.id ? this.updateTarea(this.tarea.id) : this.createTarea();
        }}
      >
        ...
      </form>

      <table>
        ...
      </table>
    </div>
  );
}
El método render devuelve el JSX que se renderizará en la interfaz de usuario. Contiene el formulario para crear/editar tareas y la tabla que muestra todas las tareas.
5. Interacción con la API
El componente interactúa con una API REST en http://localhost:9000/api. Las peticiones se hacen mediante fetch, utilizando los métodos HTTP apropiados (GET, POST, PUT, DELETE).

6. Manejo de Errores
Cada método que interactúa con la API tiene un bloque try-catch para manejar errores y evitar que el componente falle sin control.

Ejecución
Asegúrate de que la API esté corriendo en http://localhost:9000/api.
Inicia el servidor de desarrollo de StencilJS.
El componente debería cargar automáticamente las tareas desde la API y permitirte crear, editar, y eliminar tareas desde la interfaz.
Requisitos
StencilJS
API REST corriendo en http://localhost:9000/api.
css
Mostrar siempre los detalles

