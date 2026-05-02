import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { TareaItem } from '../tarea-item/tarea-item';
import { Tarea } from '../tarea.model';
 
@Component({
  selector: 'app-lista-tareas',
  standalone: true,
  imports: [FormsModule, TareaItem],
  templateUrl: './lista-tareas.html',
  styleUrl: './lista-tareas.css'
})
export class ListaTareas {
  // Lista inicial de tareas
  tareas: Tarea[] = [
    { id: 1, texto: 'Estudiar Angular', completada: false },
    { id: 2, texto: 'Hacer ejercicio', completada: true },
    { id: 3, texto: 'Leer un libro', completada: false }
  ];
 
  // Texto del input para agregar nuevas tareas
  nuevaTarea: string = '';
 
  // Agregar una nueva tarea
  agregarTarea(): void {
    const texto = this.nuevaTarea.trim();
    if (texto.length === 0) return;
 
    const nueva: Tarea = {
      id: Date.now(),
      texto: texto,
      completada: false
    };
 
    this.tareas.push(nueva);
    this.nuevaTarea = '';
  }
 
  // Recibe el id desde el hijo y alterna el estado completada
  alternarCompletada(id: number): void {
    const tarea = this.tareas.find(t => t.id === id);
    if (tarea) {
      tarea.completada = !tarea.completada;
    }
  }
 
  // Recibe el id desde el hijo y elimina la tarea
  eliminarTarea(id: number): void {
    this.tareas = this.tareas.filter(t => t.id !== id);
  }
}
