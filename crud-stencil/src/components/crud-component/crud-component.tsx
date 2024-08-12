import { Component, State, h } from '@stencil/core';

@Component({
  tag: 'crud-component',
  styleUrl: 'crud-component.css',
  shadow: true,
})
export class CrudComponent {
  @State() tareas: any[] = [];
  @State() selectedTarea: any = null;
  @State() showDetails: boolean = false;
  @State() tarea = {
    id: '',
    title: '',
    description: '',
    start_time: '',
    end_time: '',
  };

  baseUrl = 'http://localhost:9000/api';

  componentWillLoad() {
    this.fetchTareas();
  }

  // Obtener todas las tareas
  async fetchTareas() {
    try {
      const response = await fetch(this.baseUrl);
      if (!response.ok) {
        throw new Error('Error al obtener las tareas');
      }
      const data = await response.json();
      this.tareas = data;
    } catch (error) {
      console.error('Error fetching tareas', error);
    }
  }

  // Crear una nueva tarea
  async createTarea() {
    try {
      const response = await fetch(this.baseUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.tarea),
      });
      if (!response.ok) {
        throw new Error('Error al crear la tarea');
      }
      this.fetchTareas(); // Refresca la lista después de crear la tarea
      this.resetForm();
    } catch (error) {
      console.error('Error creating tarea', error);
    }
  }

  // Mostrar detalles de una tarea
  async viewTarea(id: string) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`);
      if (!response.ok) {
        throw new Error('Error al obtener la tarea');
      }
      const data = await response.json();
      this.selectedTarea = data;
      this.showDetails = true;
    } catch (error) {
      console.error('Error fetching tarea details', error);
    }
  }

  // Ocultar detalles
  closeDetails() {
    this.showDetails = false;
    this.selectedTarea = null;
  }


  // Actualizar una tarea existente
  async updateTarea(id) {
    try {
      await fetch(`${this.baseUrl}/${id}`, {
        method: 'PUT',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(this.tarea),
      });
      this.fetchTareas(); // Refresca la lista después de actualizar la tarea
      this.resetForm();
    } catch (error) {
      console.error('Error updating tarea', error);
    }
  }

  // Eliminar una tarea
  async deleteTarea(id: string) {
    try {
      const response = await fetch(`${this.baseUrl}/${id}`, {
        method: 'DELETE',
      });
      if (!response.ok) {
        throw new Error('Error al eliminar la tarea');
      }
      this.fetchTareas(); // Refresca la lista después de eliminar la tarea
    } catch (error) {
      console.error('Error deleting tarea', error);
    }
  }

  // Manejar cambios en los inputs del formulario
  handleInputChange(event) {
    const { name, value } = event.target;
    this.tarea = { ...this.tarea, [name]: value };
  }

  handleEditTarea(tarea: any) {
    this.tarea = { ...tarea };
  }
  // Resetear el formulario
  resetForm() {
    this.tarea = {
      id: '',
      title: '',
      description: '',
      start_time: '',
      end_time: '',
    };
  }

  render() {
    return (
      <div>
        <h1>Lista de Tareas</h1>
        <form
          onSubmit={(e) => {
            e.preventDefault();
          }}
        >
          <input
            type="text"
            name="id"
            value={this.tarea.id}
            placeholder="Colocar ID para Crear y Actualizar"
            onInput={(event) => this.handleInputChange(event)}
          />
          <input
            type="text"
            name="title"
            value={this.tarea.title}
            placeholder="Título de la tarea"
            onInput={(event) => this.handleInputChange(event)}
          />
          <input
            type="text"
            name="description"
            value={this.tarea.description}
            placeholder="Descripción de la tarea"
            onInput={(event) => this.handleInputChange(event)}
          />
          <input
            type="time"
            name="start_time"
            value={this.tarea.start_time}
            placeholder="Hora de inicio"
            onInput={(event) => this.handleInputChange(event)}
          />
          <input
            type="time"
            name="end_time"
            value={this.tarea.end_time}
            placeholder="Hora de término"
            onInput={(event) => this.handleInputChange(event)}
          />

          <div class="button-group">
              <button
                type="button"
                class="create-button"
                onClick={() => this.createTarea()}
              >
                Crear Tarea
              </button>
              {this.tarea.id && (
                <button
                  type="button"
                  class="update-button"
                  onClick={() => this.updateTarea(this.tarea.id)}
                >
                  Actualizar Tarea
                </button>
              )}
            </div>
        </form>

        <table>
          <thead>
            <tr>
              <th>ID</th>
              <th>Título</th>
              <th>Descripción</th>
              <th>Hora de Inicio</th>
              <th>Hora de Término</th>
              <th>Acciones</th>
            </tr>
          </thead>
          <tbody>
            {this.tareas.map((tarea) => (
              <tr>
                <td>{tarea.id}</td>
                <td>{tarea.title}</td>
                <td>{tarea.description}</td>
                <td>{tarea.start_time}</td>
                <td>{tarea.end_time}</td>
                <td>
                  <button onClick={() => this.viewTarea(tarea.id)}>
                    Leer
                  </button>
                  <button onClick={() => this.handleEditTarea(tarea)}>
                    Editar
                  </button>
                  <button onClick={() => this.deleteTarea(tarea.id)}>
                    Eliminar
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
        {this.showDetails && this.selectedTarea && (
          <div class="details-modal">
            <div class="modal-content">
              <span class="close" onClick={() => this.closeDetails()}>&times;</span>
              <h2>Detalles de la Tarea</h2>
              <p><strong>ID:</strong> {this.selectedTarea.id}</p>
              <p><strong>Título:</strong> {this.selectedTarea.title}</p>
              <p><strong>Descripción:</strong> {this.selectedTarea.description}</p>
              <p><strong>Hora de Inicio:</strong> {this.selectedTarea.start_time}</p>
              <p><strong>Hora de Término:</strong> {this.selectedTarea.end_time}</p>
            </div>
          </div>
        )}
      </div>
    );
  }
}
