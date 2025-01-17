import { Router } from '@angular/router';
import { Component, OnInit } from '@angular/core';
import { environment } from 'src/environments/environment.prod';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.css']
})
export class MenuComponent implements OnInit {

  nome = environment.nome
  foto = environment.foto
  id = environment.id
 
 
 constructor(

    private router: Router

  ) { }

  ngOnInit() {
  }

  sair() {

    this.router.navigate(['/logar'])
    environment.token = ''
    environment.id = 0
    environment.nome = ''
    environment.foto = ''

  }
}
