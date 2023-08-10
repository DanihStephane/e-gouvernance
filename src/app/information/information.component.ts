import { Component } from '@angular/core';
import {Router} from "@angular/router";

@Component({
  selector: 'app-information',
  templateUrl: './information.component.html',
  styleUrls: ['./information.component.css']
})
export class InformationComponent {

  constructor(
    private router: Router
  ) {

  }

  logout(): void{
    this.router.navigate(['/signin']);
  }

  homePage(): void{
    this.router.navigate(['/homepage']);
  }

  demande(): void{
    this.router.navigate(['/demande']);
  }

  information(): void{
    this.router.navigate(['/information']);
  }
}
