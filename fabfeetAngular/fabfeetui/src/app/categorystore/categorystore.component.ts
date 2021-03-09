import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup } from '@angular/forms';
import {CategoryserviceService} from '../categoryservice.service';
@Component({
  selector: 'app-categorystore',
  templateUrl: './categorystore.component.html',
  styleUrls: ['./categorystore.component.css']
})
export class CategorystoreComponent implements OnInit {
  categoryInfo=new FormGroup({
    catid:new FormControl(),
    categoryName:new FormControl(),
    
  })
  msg:string=""
  constructor(public categorySer:CategoryserviceService) { }


  ngOnInit(): void {
  }
   
  storeCategoryDetails(){
    let categoryRef=this.categoryInfo.value
    this.categorySer.storeCategoryInfo(categoryRef).subscribe(result=>this.msg=result)
    //console.log(this.productInfo.value)
  }

}
