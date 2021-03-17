import { Component, OnInit } from '@angular/core';
import {CategoryserviceService} from '../categoryservice.service';

@Component({
  selector: 'app-categoryupdate',
  templateUrl: './categoryupdate.component.html',
  styleUrls: ['./categoryupdate.component.css']
})
export class CategoryupdateComponent implements OnInit {
  msg:string=""
  constructor(public categorySer:CategoryserviceService) { }

  ngOnInit(): void {
  }
  updateCategoriesInfo(categoryInfo:any){
    this.categorySer.updateCategoriesInfo(categoryInfo).subscribe(data=>this.msg=data)
  }
}