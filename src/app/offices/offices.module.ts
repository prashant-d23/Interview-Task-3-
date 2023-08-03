import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { OfficesRoutingModule } from './offices-routing.module';
import { OfficesComponent } from './offices.component';
import { OfficeHierarchyComponent } from './office-hierarchy/office-hierarchy.component';
import { OfficeLocationComponent } from './office-location/office-location.component';


@NgModule({
  declarations: [
    OfficesComponent,
    OfficeHierarchyComponent,
    OfficeLocationComponent
  ],
  imports: [
    CommonModule,
    OfficesRoutingModule
  ]
})
export class OfficesModule { }
