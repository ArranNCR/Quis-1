import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas3',
  templateUrl: './tugas3.component.html',
  // styleUrls: ['./tugas3.component.css']
  styles:[`
  .warna {
      color:  white;
  }
`]
})
export class Tugas3Component implements OnInit {
log = [];
variabel = " ";
status = false;
  constructor() { }

  ngOnInit() {
  }
  onCreationStatus(){
    if(this.status==false){
      this.variabel = "SKRRRRAAAAAA AAAAAA BOOOM!"
      this.status = true; 
    }else{
      this.variabel=" "
      this.status=false;
    }
    this.log.push(this.log.length+1);
  }
  
  
}
