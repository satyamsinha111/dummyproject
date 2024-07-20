import { CommonModule } from '@angular/common';
import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { AbstractControl, FormControl, FormGroup, ReactiveFormsModule, Validators } from '@angular/forms';
import { Router, RouterLink } from '@angular/router';
import { AuthService } from '../../services/auth.service';

@Component({
  selector: 'app-register',
  standalone: true,
  imports: [ReactiveFormsModule,RouterLink,CommonModule],
  templateUrl: './register.component.html',
  styleUrl: './register.component.scss',
  providers:[AuthService],
  changeDetection:ChangeDetectionStrategy.OnPush
})
export class RegisterComponent implements OnInit {
  registerForm!: FormGroup;
  constructor(private _router:Router,private _authService:AuthService){

  }

  ngOnInit(): void {
    this.registerForm = new FormGroup({
      name: new FormControl('', [Validators.required]),
      email: new FormControl('', [Validators.required,Validators.email]),
      password: new FormControl('', [Validators.required,Validators.minLength(8)]),
      confirm_password: new FormControl('',[Validators.required,Validators.minLength(8)])
    },{
      validators:this.passwordsMatchValidator
    });
  }

  passwordsMatchValidator(group: AbstractControl) {
    const password = group.get('password')?.value;
    const confirm_password = group.get('confirm_password')?.value;
    return password === confirm_password ? null : { passwordsMismatch: true };
  }

  get name() {
    return this.registerForm.get('name')!;
  }

  get password() {
    return this.registerForm.get('password')!;
  }

  get email() {
    return this.registerForm.get('email')!;
  }



  onSubmit(): void {
    if (this.registerForm.valid) {
      console.log('Form Submitted!', this.registerForm.value);
      this._authService.setUserDetails(this.registerForm.value)
      this._router.navigate(['user-profile']);
    } else {
      console.log('Form is invalid');
    }
  }
}
