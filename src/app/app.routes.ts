import { Routes } from '@angular/router';
import { ProductsComponent } from './components/products/products.component';
import { UsersComponent } from './components/users/users.component';
import { HomeComponent } from './components/home/home.component';

export const routes: Routes = [

{path: '', redirectTo: 'home', pathMatch: 'full'},
{path: 'products', component: ProductsComponent},
{path: 'users', component: UsersComponent},
{path: 'home', component: HomeComponent},
{path: '**', redirectTo: 'home', pathMatch: 'full'},

];
