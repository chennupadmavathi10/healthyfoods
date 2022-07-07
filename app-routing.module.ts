import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AboutComponent } from './about/about.component';
import { ContactusComponent } from './contactus/contactus.component';
import { HomeComponent } from './home/home.component';
import { ProductComponent } from './product/product.component';
import { ReviewComponent } from './review/review.component';
import { ServiceComponent } from './service/service.component';
import { SignInComponent } from './sign-in/sign-in.component';
import { SignUpComponent } from './sign-up/sign-up.component';
import { PagenotfoundComponent } from './pagenotfound/pagenotfound.component'

const routes: Routes = [ 
  {path:'home',component:HomeComponent},
  {path:'contactus',component:ContactusComponent},
  {path:'product',component:ProductComponent},
  {path:'about',component:AboutComponent},
  {path:'service',component:ServiceComponent},
  {path:'review',component:ReviewComponent},
  {path:'sign_in',component:SignInComponent},
  {path:'sign_up',component:SignUpComponent},
  {path:'',redirectTo:'home',pathMatch:'full'},
  {path:'**',component:PagenotfoundComponent},  
];


@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
