import { Component, OnInit } from '@angular/core';
import {CategoryserviceService} from '../categoryservice.service';
@Component({
  selector: 'app-categorydelete',
  templateUrl: './categorydelete.component.html',
  styleUrls: ['./categorydelete.component.css']
})
export class CategorydeleteComponent implements OnInit {
  msg:string=""
  constructor(public categorySer:CategoryserviceService){}
  

  ngOnInit(): void {
  }
  deleteCategory(cid:any){
    this.categorySer.deleteCategoryInfo(cid).subscribe(result=>this.msg=result)
  }

}
