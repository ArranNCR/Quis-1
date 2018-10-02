import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tugas',
  templateUrl: './tugas.component.html',
  styleUrls: ['./tugas.component.css']
})
export class TugasComponent implements OnInit {
username = '';
btcheck = false;
  constructor() { }

  ngOnInit() {
  }
onupdateServername(event : Event){
  this.username = (<HTMLInputElement>
  event.target).value;
}
buttoncheck(){
  if(this.username === ''){
    return this.btcheck = true;
  }
}
clear(){
  return this.username='';
}
}
