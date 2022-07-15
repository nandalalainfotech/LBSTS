import { CUSTOM_ELEMENTS_SCHEMA, NgModule, NO_ERRORS_SCHEMA } from '@angular/core';
import { CommonModule } from '@angular/common';

import { CategorydetailsRoutingModule } from './categorydetails-routing.module';
import { CategorydetailsComponent } from './categorydetails.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';
import { SubcatclassificationComponent } from './subcatclassification/subcatclassification.component';
import { AgGridModule } from 'ag-grid-angular';
import { SubCategoryManager } from 'src/app/shared/services/restcontroller/bizservice/subcategorymanager.service';
 import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { SubCatClassificationManager } from 'src/app/shared/services/restcontroller/bizservice/subcatcassification.service';
import { CategoryComponent } from './category/category.component';
import { CategoryManager } from 'src/app/shared/services/restcontroller/bizservice/category.service';


@NgModule({
  declarations: [
    CategorydetailsComponent,
    SubcategoryComponent,
    SubcatclassificationComponent,
    CategoryComponent
  ],
  imports: [
    FormsModule,
    ReactiveFormsModule,
    CommonModule,
    CategorydetailsRoutingModule,
    AgGridModule.withComponents([])
  ],
  providers: [
    SubCategoryManager,
    SubCatClassificationManager,
    CategoryManager

  ],
  exports: [],
  schemas: [CUSTOM_ELEMENTS_SCHEMA, NO_ERRORS_SCHEMA]
})
export class CategorydetailsModule { }
