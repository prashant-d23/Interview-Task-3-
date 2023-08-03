import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { OfficesComponent } from './offices.component';
import { OfficeHierarchyComponent } from './office-hierarchy/office-hierarchy.component';
import { OfficeLocationComponent } from './office-location/office-location.component';

const routes: Routes = [
  {path: '',
component : OfficesComponent,
children : [
  {path : 'hierarchy', component : OfficeHierarchyComponent},
  {path : 'location', component : OfficeLocationComponent}
]}
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class OfficesRoutingModule { }
