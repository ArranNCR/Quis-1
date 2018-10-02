import { Component, OnInit } from '@angular/core';
import { Pegawai } from '../Shared/pegawai';

@Component({
  selector: 'app-pegawai',
  templateUrl: './pegawai.component.html',
  styleUrls: ['./pegawai.component.css']
})
export class PegawaiComponent implements OnInit {
  daftarPegawai:Pegawai[]=[];
  nama='';
  nip='';
  alamat='';
  jk='';
  pegawai;
  constructor() { }

  ngOnInit() {
  }
  tambahData(){
    this.pegawai= new Pegawai(this.nama, this.nip, this.alamat, this.jk);
    this.daftarPegawai.push(this.pegawai);
    this.nama = '';
    this.nip = '';
    this.alamat = '';
    this.jk = '';
  }
  }
