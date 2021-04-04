import { Component } from '@angular/core';



@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'eLibrary';
  main:string = 'container';
  SignIn(){
    this.main = 'container sign-in-mode';
  }
  SignUp(){
    this.main = 'container sign-up-mode';
  }
}
