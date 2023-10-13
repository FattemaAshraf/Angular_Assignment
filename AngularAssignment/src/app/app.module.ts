import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MatSlideToggleModule } from '@angular/material/slide-toggle';
import { NotFoundComponent } from './resource/Components/not-found/not-found.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { NameAndImageComponent } from './resource/Components/name-and-image/name-and-image.component';
import { AvailabilityResourceComponent } from './resource/Components/availability-resource/availability-resource.component';
import { TimeWorkComponent } from './resource/Components/time-work/time-work.component';
import { TypeResourceComponent } from './resource/Components/type-resource/type-resource.component';


@NgModule({
  declarations: [
    AppComponent,
    NotFoundComponent,
    NameAndImageComponent,
    AvailabilityResourceComponent,
    TimeWorkComponent,
    TypeResourceComponent

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FontAwesomeModule,
    BrowserAnimationsModule,
    ReactiveFormsModule,
    FormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
