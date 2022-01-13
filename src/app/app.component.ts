import { Component, ViewChild } from '@angular/core';
import { Router, RouterModule, ActivatedRoute } from '@angular/router';

@Component({
  selector: 'my-app',
  templateUrl: './app.component.html',
  styleUrls: [ './app.component.css' ]
})
export class AppComponent  {
  name = 'Angular';
  public selection = '';
  selection1 = '';
  selection2 = '';
  public customOption: string = 'customOption';

  constructor(private router: Router) {

  }

  successFw() {
    console.log('success popup with forward page');
    this.router.navigateByUrl('result');
  }

  successNoFw() {
    console.log('success popup without forward page');
  }

  errorMsg() {
    console.log('error popup');
  }
}
