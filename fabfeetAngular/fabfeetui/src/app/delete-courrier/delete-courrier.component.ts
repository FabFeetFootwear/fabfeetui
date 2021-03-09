import { Component, OnInit } from '@angular/core';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-delete-courrier',
  templateUrl: './delete-courrier.component.html',
  styleUrls: ['./delete-courrier.component.css']
})
export class DeleteCourrierComponent implements OnInit {
  msg:string="";
  constructor(public courrierSer:CourrierService) { }

  ngOnInit(): void {
  }
  deleteCourrier(coid:any){
    this.courrierSer.deleteCourrierInfo(coid).subscribe(result=>this.msg=result);
  }

}
