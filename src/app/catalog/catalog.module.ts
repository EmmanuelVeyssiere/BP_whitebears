import { NgModule } from '@angular/core';

import { CatalogComponent } from "./catalog.component";
import { SharedModule } from '../shared/shared.module';
import { AppRoutingModule } from '../app-routing.module';
import { CatalogRepositoryService } from './catalog-repository.service';
import { FilterClassesService } from './filter-classes.service';


@NgModule({
  declarations: [
    CatalogComponent
  ],
  imports: [
    SharedModule,
    AppRoutingModule
  ],
  providers: [CatalogRepositoryService, FilterClassesService],
  exports: []
})
export class CatalogModule { }
