import { element } from 'protractor';
import { Observable } from 'rxjs/Observable';
import { ProduccionModel, UsuariosModel } from './../../modeloDatos';
import { Component, OnInit, Input, OnChanges } from '@angular/core';
import { MenuDesplegableComponent } from './../menu-desplegable/menu-desplegable.component';
import { UsuariosService } from '../../servicios/usuarios.service';
import { filter } from 'rxjs/operator/filter';

@Component({
  selector: 'app-menu-usuarios',
  templateUrl: './menu-usuarios.component.html',
  styleUrls: ['./menu-usuarios.component.css']
})


export class MenuUsuariosComponent extends MenuDesplegableComponent implements OnInit {
  @Input('usuarioActivo') itemActivo: String;
  @Input('usuarios') items: UsuariosModel[];

  prueba: boolean = false;
  
  constructor() { 
    super();
  }

  seleccionarItem(elemento: number): void {
    this.itemActivo = this.items.find(e => e.Codigo == elemento).Nombre;
    this.mostrarOcultarMenu();
  }

}

