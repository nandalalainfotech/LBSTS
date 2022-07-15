import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { CategoryComponent } from './category/category.component';

import { CategorydetailsComponent } from './categorydetails.component';
import { SubcatclassificationComponent } from './subcatclassification/subcatclassification.component';
import { SubcategoryComponent } from './subcategory/subcategory.component';

const routes: Routes = [{
  path: "",
  component: CategorydetailsComponent,
  children: [{
    path: "app-subcategory",
    component: SubcategoryComponent,
  },
  {
    path: "app-subcatclassification",
    component: SubcatclassificationComponent,
  },
  {
    path: "app-category",
    component: CategoryComponent,
  },
  ]
}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class CategorydetailsRoutingModule { }
