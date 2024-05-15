import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { ReactiveFormsModule, FormsModule } from '@angular/forms'

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NavBarComponent } from './nav-bar.component';
import { CatalogComponent } from "./catalog/catalog.component";
import { RegisterComponent } from "./user/register.component";
import { SignInComponent } from "./user/sign-in.component";
import { LoadingSpinnerComponent } from "./components/loading-spinner.component";
import { UserRepositoryService } from "./user/user-repository.service"
import { AccountMenuComponent } from "./account-menu.component";
import { CatalogRepositoryService } from './catalog/catalog-repository.service';

@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    CatalogComponent,
    RegisterComponent,
    SignInComponent,
    LoadingSpinnerComponent,
    AccountMenuComponent  ],
  imports: [
    BrowserModule,
    FormsModule,
    ReactiveFormsModule,
    AppRoutingModule
  ],
  providers: [UserRepositoryService, CatalogRepositoryService],
  bootstrap: [AppComponent]
})
export class AppModule { }
