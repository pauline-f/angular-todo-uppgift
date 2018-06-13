import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';


import { AppComponent } from './app.component';
import { UserListComponent } from './user-list/user-list.component';
import { HeaderComponent } from './header/header.component';
import { UsersService } from './services/users.service';
import { HttpClientModule } from '@angular/common/http';
import { SingleUserComponent } from './single-user/single-user.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { RouterModule, Routes } from '@angular/router';
import { HttpModule, Http, Response, RequestOptions, Headers } from '@angular/http';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/view/:id', component: SingleUserComponent },
  { path: '', redirectTo: 'users', pathMatch:'full'},
  { path: '**', redirectTo: 'users'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    SingleUserComponent
  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    HttpClientModule,
    HttpModule,
    RouterModule.forRoot(appRoutes)
  ],
  providers: [
    Http,
    UsersService
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
