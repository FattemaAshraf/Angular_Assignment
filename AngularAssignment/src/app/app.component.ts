import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'AngularAssignment';
  pageTitle = 'Write in app.component';
  display(title: string){
    return this.pageTitle+" "+title
  }
}
