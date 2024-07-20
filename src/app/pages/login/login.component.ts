import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, ReactiveFormsModule } from '@angular/forms';
import { RouterLink,Router } from '@angular/router';
import { AuthService } from '../../services/auth.service';


@Component({
  selector: 'app-login',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './login.component.html',
  styleUrl: './login.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[AuthService]
})
export class LoginComponent implements OnInit {
  loginForm!: FormGroup;

  constructor(private _router:Router,private _authService:AuthService){

  }

  ngOnInit(): void {
    this.loginForm = new FormGroup({
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)])
    });
  }

  

  get email() {
    return this.loginForm.get('email')!;
  }

  get password() {
    return this.loginForm.get('password')!;
  }

  onSubmit(): void {
    if (this.loginForm.valid) {
      // console.log('Form Submitted!', this.loginForm.value);
      if(this.loginForm.value['email']==='dummyuser@meil.com' && this.loginForm.value['password']==='12345678'){
        this._authService.setUserDetails(this.loginForm.value)
        this._router.navigate(['user-profile']);

      }else{
        alert("Incorrect credentials")
      }
    } else {
      console.log('Form is invalid');
    }
  }
}
