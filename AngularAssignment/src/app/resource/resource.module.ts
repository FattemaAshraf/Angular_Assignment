import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NameAndImageComponent } from './Components/name-and-image/name-and-image.component';
import { TypeResourceComponent } from './Components/type-resource/type-resource.component';
import { AvailabilityResourceComponent } from './Components/availability-resource/availability-resource.component';
import { TimeWorkComponent } from './Components/time-work/time-work.component';



@NgModule({
  declarations: [
    NameAndImageComponent,
    TypeResourceComponent,
    AvailabilityResourceComponent,
    TimeWorkComponent
  ],
  imports: [
    CommonModule
  ]
})
export class ResourceModule { }
