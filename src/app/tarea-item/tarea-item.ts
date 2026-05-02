import { Component, input, output } from '@angular/core';
import { Tarea } from '../tarea.model';
 
@Component({
  selector: 'app-tarea-item',
  standalone: true,
  imports: [],
  templateUrl: './tarea-item.html',
  styleUrl: './tarea-item.css'
})
export class TareaItem {
  // RECIBE datos desde el padre
  tarea = input.required<Tarea>();
 
  // ENVÍA eventos al padre
  completar = output<number>();
  eliminar = output<number>();
 
  alCompletar(): void {
    this.completar.emit(this.tarea().id);
  }
 
  alEliminar(): void {
    this.eliminar.emit(this.tarea().id);
  }
}
