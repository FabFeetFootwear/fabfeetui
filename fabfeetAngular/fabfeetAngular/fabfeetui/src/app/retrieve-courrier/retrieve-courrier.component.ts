import { Component, OnInit } from '@angular/core';
import { Courrier } from '../courrier.module';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-retrieve-courrier',
  templateUrl: './retrieve-courrier.component.html',
  styleUrls: ['./retrieve-courrier.component.css']
})
export class RetrieveCourrierComponent implements OnInit {
  courrierInfo:Array<Courrier>=[];
  flag:boolean = false;
  constructor(public courrierSer:CourrierService) { }

  ngOnInit(): void {
    this.flag=true;
    this.courrierSer.loadCourrierDetails().subscribe(data=>this.courrierInfo=data);
    
  }
  
  /*loadData(){
    
  }*/
  

}
