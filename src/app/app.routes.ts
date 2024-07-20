import { Routes } from '@angular/router';
import { authPrivateGuard } from './guards/auth-private.guard';
import { authPublicGuard } from './guards/auth-public.guard';

export const routes: Routes = [
    {
        path:'',
        loadComponent: ()=> import("./pages/login/login.component").then(c=>c.LoginComponent),
        canActivate:[authPublicGuard]
    },
    {
        path:'register',
        loadComponent: ()=> import("./pages/register/register.component").then(c=>c.RegisterComponent),
        canActivate:[authPublicGuard]
    },
    {
        path:'product-list',
        loadComponent: ()=> import("./pages/product-list/product-list.component").then(c=>c.ProductListComponent),
        
    },
    {
        path:'product-detail/:id',
        loadComponent: ()=> import("./pages/product-detail/product-detail.component").then(c=>c.ProductDetailComponent),
       
    },{
        path:'user-profile',
        loadComponent: ()=> import("./pages/user-profile/user-profile.component").then(c=>c.UserProfileComponent),
        canActivate:[authPrivateGuard]
    }
];
