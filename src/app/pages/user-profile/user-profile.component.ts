import { Component } from '@angular/core';

@Component({
  selector: 'app-user-profile',
  standalone: true,
  imports: [],
  templateUrl: './user-profile.component.html',
  styleUrl: './user-profile.component.scss'
})
export class UserProfileComponent {
   user:any = {
    name:"Demo name",
    email:"demo@gmail.com",
    phone:"123456789",
    address:"Konnagar"
   }
}
