import { Component, OnInit } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterOutlet } from '@angular/router';
import { BarraMenuComponent } from './barra-menu/barra-menu.component';
import { Usuario } from './usuario';
import { UsuariosService } from './usuarios.service';
import { NavegacionComponent } from './navegacion/navegacion.component';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, FormsModule, BarraMenuComponent, NavegacionComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'mi-app';

}