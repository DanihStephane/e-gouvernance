import { Component } from '@angular/core';
import {Router} from "@angular/router";
import {CreateComponent} from "../create/create.component";
import { Dialog,  DialogModule } from '@angular/cdk/dialog';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import { MatIconModule } from '@angular/material/icon';

import {MatSnackBarModule} from "@angular/material/snack-bar";
import {SnackbarService} from "../../../shared/snackbar.service";

import {FormBuilder, Validators, FormsModule, ReactiveFormsModule} from '@angular/forms';

@Component({
  selector: 'app-list-create',
  templateUrl: './list-create.component.html',
  styleUrls: ['./list-create.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    //Modal
    DialogModule,
    MatIconModule,
    MatSnackBarModule,
    ReactiveFormsModule
  ],
  providers: [
    SnackbarService
  ]
})
export class ListCreateComponent {
  constructor(
    private router: Router,
    public dialog: Dialog
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

  create(): void{
    this.router.navigate(['/create']);
  }
}
