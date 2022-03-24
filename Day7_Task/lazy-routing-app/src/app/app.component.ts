import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'lazy-routing-app';

  user:any = {};

  afterSubmit(){
    alert(JSON.stringify(this.user));
  }

}
