import { Component } from '@angular/core';
import { FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router } from '@angular/router';

import { MatButtonModule } from '@angular/material/button';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatInputModule } from '@angular/material/input';

import { EventService } from '../event.service';

@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule, MatButtonModule, MatFormFieldModule, MatInputModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss'
})
export class LoginComponent {

  form!: FormGroup;

  constructor(
    private router: Router,
    private eventService: EventService
  ) {}

  ngOnInit() {
    this.form = new FormGroup({
      email: new FormControl('', [Validators.email, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.minLength(1)])
    });
  }

  login(): void {
    this.router.navigateByUrl('dashboard');
    this.eventService.authenticated = true;
  }

}
