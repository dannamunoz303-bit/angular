import { Component } from '@angular/core';
import { Perfil } from './perfil/perfil';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [Perfil],
  templateUrl: './app.html',
  styleUrl: './app.css'
})
export class App {
  protected title = 'mi-primera-app';
}