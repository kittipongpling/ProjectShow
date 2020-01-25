import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { LoginComponent } from './login/login.component';
import { HomeComponent } from './home/home.component';
import { PagenofoundComponent } from './pagenofound/pagenofound.component';


const appRoutes: Routes = [
  { path: 'home', component: HomeComponent },
  { path: 'pagenofound', component: PagenofoundComponent },
  { path: 'login', component: LoginComponent },

 
  { path: '',
    redirectTo: '/login', // เปลี่ยนเส้นทาง
    pathMatch: 'full'
  },
  { path: '**', component: LoginComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(
    appRoutes,
    { enableTracing: false } // <-- debugging purposes only set true
  )],
  exports: [RouterModule]
})
export class AppRoutingModule { }
