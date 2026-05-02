import { Component } from "@angular/core";

@Component({
  selector: "app-perfil",
  standalone: true,
  imports: [],
  templateUrl: "./perfil.html",
  styleUrl: "./perfil.css",
})
export class Perfil {

  // Datos del perfil
  nombre: string = "Danna Sofia Muñoz";
  profesion: string = "Desarrollador Frontend";
  habilidades: string[] = [
    "HTML",
    "CSS",
    "JavaScript",
    "Angular",
    "TypeScript",
  ];

  // Estados
  mostrarHabilidades: boolean = false;
  contadorLikes: number = 0;
  disponible: boolean = true;

  // Métodos
  alternarHabilidades(): void {
    this.mostrarHabilidades = !this.mostrarHabilidades;
  }

  darLike(): void {
    this.contadorLikes++;
  }

  cambiarEstado(): void {
    this.disponible = !this.disponible;
  }
}