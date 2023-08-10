import {Component, OnInit} from '@angular/core';
import { Router, RouterStateSnapshot } from '@angular/router';
import {MatCardModule} from '@angular/material/card';
import {MatListModule} from '@angular/material/list';
import {MatDatepickerModule} from '@angular/material/datepicker';
import {MatNativeDateModule} from '@angular/material/core';
import { MatInputModule } from '@angular/material/input';
import { MatButtonModule } from '@angular/material/button';
import {NgFor} from '@angular/common';
import {
  CdkDragDrop,
  CdkDrag,
  CdkDropList,
  CdkDropListGroup,
  moveItemInArray,
  transferArrayItem,
  DragDropModule,
} from '@angular/cdk/drag-drop';
import {HttpStatusCode} from "@angular/common/http";
import {NewsService} from "../../shared/news.service";
import {News} from "../../shared/news.model";



@Component({
  selector: 'app-homepage',
  templateUrl: './homepage.component.html',
  styleUrls: ['./homepage.component.css'],
  standalone: true,
  imports: [
    MatCardModule,
    MatListModule,
    MatDatepickerModule,
    MatNativeDateModule,
    MatInputModule,
    MatButtonModule,
    CdkDropListGroup, CdkDropList, NgFor, CdkDrag,DragDropModule
  ],
})
export class HomepageComponent implements OnInit {
  username: string = '';

  errorMessage?: string ;

  news:News[] = [];

  //pagination
  page: number=0;
  limit: number=10;
  totalDocs: number = 0;
  totalPages: number = 0;
  hasPrevPage: boolean = false;
  prevPage: number = 0;
  hasNextPage: boolean = false;
  nextPage: number = 0;

  constructor(
    private newsService:NewsService,
    private router: Router
  ) {

  }

  onSuccessList = (reponse: any) =>{
    console.log(reponse);
    console.log(reponse.data.content);
    if(reponse.code == HttpStatusCode.Ok){
      console.log(reponse);
      this.news = reponse.data.content;
      this.setPageProperties(reponse.data);
    }else{
      this.errorMessage = reponse.message;
      console.log(this.errorMessage);
    }
  }

  getNews() {
    // this.newsService.getNews(this.page,this.limit).subscribe(
    //   this.onSuccessList
    // );
  }

  ngOnInit(): void {
    this.getNews();
  }

  setPageProperties(data: any){
    this.page = data.page;
    this.limit = data.limit;
    this.totalDocs = data.totalDocs;
    this.totalPages = data.totalPages;
    this.hasPrevPage = data.hasPrevPage;
    this.prevPage = data.prevPage;
    this.hasNextPage = data.hasNextPage;
    this.nextPage = data.nextPage;
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
