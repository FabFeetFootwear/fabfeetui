import { Component, OnInit } from '@angular/core';
import { Category } from '../category.model';
import {CategoryserviceService} from '../categoryservice.service';

@Component({
  selector: 'app-categoryretrieve',
  templateUrl: './categoryretrieve.component.html',
  styleUrls: ['./categoryretrieve.component.css']
})
export class CategoryretrieveComponent implements OnInit {

  categoryinfo:Array<Category>=[];
  flag:boolean=false
  constructor(public categoryservice:CategoryserviceService) { }
  ngOnInit(): void {
    this.flag=true
    this.categoryservice.loadCategoryDetails().subscribe(data=>this.categoryinfo=data);
  }
  // loaddata()
  // {
   
  // }

}
