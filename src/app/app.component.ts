import { ChangeDetectionStrategy, Component, OnInit } from '@angular/core';
import { RouterLink, RouterOutlet,RouterLinkActive,Router } from '@angular/router';
import { AuthService } from './services/auth.service';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet,RouterLink,RouterLinkActive,CommonModule],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
  changeDetection:ChangeDetectionStrategy.OnPush,
  providers:[AuthService]
})
export class AppComponent implements OnInit {
  title = 'demo-project';
  constructor(private _authService:AuthService,private _router:Router){

  }

  ngOnInit(): void {
    
  }

  logout(){
    
    localStorage.clear();
    this._router.navigate(['/']);
  }


  isLoggedIn():boolean{
    return this._authService.isUserLoggedIn()?true:false;
  }
}
