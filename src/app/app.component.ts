import { UsuariosService } from './../servicios/usuarios.service';
import { ProduccionService } from './../servicios/produccion.service';
import { Observable } from 'rxjs/Observable';
import { Component, OnInit, Injectable } from '@angular/core';
import { ProduccionModel, UsuariosModel } from './../modeloDatos';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})

export class AppComponent implements OnInit {

  produccion: ProduccionModel;
  produccion$: Observable<ProduccionModel>;
  usuarios: UsuariosModel[];

  constructor(private produccionService: ProduccionService, private usuariosService: UsuariosService){};

  ngOnInit(){
    this.produccionService.getProduccion$().subscribe(prod => {
      this.produccion = prod;
      this.produccion$ = new Observable();
    });   

    this.usuariosService.buscarTodosLosUsuariosOperadores$().subscribe(user => {
      this.usuarios = user;
    }); 
  }
}