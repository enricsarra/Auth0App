import { Component, OnInit } from '@angular/core';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-protegida',
  templateUrl: './protegida.component.html',
  styles: []
})
export class ProtegidaComponent implements OnInit {
  auth0Client$: any;
  userProfileSubject$: any;
  // usuarios: any;

  perfil: any;

  constructor( public auth: AuthService ) { }

  ngOnInit(): void {
    /* console.log('ngOnInit protegida');
    this.auth.userProfile$.subscribe( perfil => {
      console.log('perfil',perfil);
    });
    this.auth.getUser$().subscribe( data => {
      this.usuarios = data;
      console.log('usuarios', data);
    }); */
    this.auth.userProfile$.subscribe( perfil => {
      this.perfil = perfil;
    });

  }

}
