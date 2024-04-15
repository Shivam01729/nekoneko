import { Component } from '@angular/core';
import { Art1Component } from '../art1/art1.component';
import { Art2Component } from '../art2/art2.component';
import { Art3Component } from '../art3/art3.component';
import { Art4Component } from '../art4/art4.component';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [Art1Component,Art2Component,Art3Component,Art4Component],
  templateUrl: './login.component.html',
  styleUrl: './login.component.css'
})
export class LoginComponent {

}
