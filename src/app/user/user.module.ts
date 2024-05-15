import { NgModule } from '@angular/core';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { RegisterComponent } from "./register.component";
import { SignInComponent } from "./sign-in.component";
import { SharedModule } from '../shared/shared.module';
import { UsersRoutingModule } from './users-routing.module';

@NgModule({
  declarations: [
    RegisterComponent,
    SignInComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    SharedModule,
    UsersRoutingModule
  ],
  providers: [],
  exports: []
})
export class UserModule { }
