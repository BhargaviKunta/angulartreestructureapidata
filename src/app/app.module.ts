import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './home/home.component';
import { AboutusComponent } from './aboutus/aboutus.component';
import { AllpostsComponent } from './allposts/allposts.component';
import { ContactusComponent } from './contactus/contactus.component';
import {RouterModule,Routes} from '@angular/router';
import {HttpBackend, HttpClientModule} from '@angular/common/http';
const appRoutes:Routes=[
  {path:'/',component:HomeComponent},
  {path:'aboutus', component:AboutusComponent},
  {path:'allposts',component:AllpostsComponent},
  {path:'contactus',component:ContactusComponent},
  {path:' ',redirectTo:'/home',pathMatch:'full'}

]
@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    AboutusComponent,
    AllpostsComponent,
    ContactusComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    RouterModule.forRoot(appRoutes),
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
