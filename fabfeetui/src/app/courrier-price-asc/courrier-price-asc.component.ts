import { Component, OnInit } from '@angular/core';
import { Courrier } from '../courrier.module';
import { CourrierService } from '../courrier.service';

@Component({
  selector: 'app-courrier-price-asc',
  templateUrl: './courrier-price-asc.component.html',
  styleUrls: ['./courrier-price-asc.component.css']
})
export class CourrierPriceAscComponent implements OnInit {
  courrierInfo:Array<Courrier>=[];
  flag:boolean=false;
  constructor(public courrierSer:CourrierService) { }

  ngOnInit(): void {
    this.flag=true;
    this.courrierSer.loadCourrierDetailsByAsc().subscribe(data=>this.courrierInfo=data);
  }
  /*loadDataAscCourrier(){
    //console.log(this.courrierInfo);
    this.flag=true;
    this.courrierSer.loadCourrierDetailsByAsc().subscribe(data=>this.courrierInfo=data);
    //console.log(data);
    

  
  }*/

}
