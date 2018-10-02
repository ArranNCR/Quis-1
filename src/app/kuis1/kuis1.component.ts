import { Component, OnInit } from '@angular/core';
import { DataMahasiswa } from '../Shared/mahasiswa';

@Component({
  selector: 'app-kuis1',
  templateUrl: './kuis1.component.html',
  styleUrls: ['./kuis1.component.css']
})
export class Kuis1Component implements OnInit {
  DaftarMahasiswa:DataMahasiswa[]=[];
  nim = '';
  nama = '';
  kelas= '';
  mahasiswa;
  constructor() { }

  ngOnInit() {
  }
  tambahData(){
    this.mahasiswa= new DataMahasiswa(this.nim, this.nama, this.kelas);
    this.DaftarMahasiswa.push(this.mahasiswa);
    this.nim = '';
    this.nama = '';
    this.kelas = '';
  }
}
