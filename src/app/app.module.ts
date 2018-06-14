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
import { FourOhFourComponent } from './four-oh-four/four-oh-four.component';

const appRoutes: Routes = [
  { path: 'users', component: UserListComponent },
  { path: 'users/:id', component: SingleUserComponent },
  { path: '', component: UserListComponent },
  { path: 'not-found', component: FourOhFourComponent },
  { path: '**', redirectTo: 'not-found'}
]

@NgModule({
  declarations: [
    AppComponent,
    UserListComponent,
    HeaderComponent,
    SingleUserComponent,
    FourOhFourComponent
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
