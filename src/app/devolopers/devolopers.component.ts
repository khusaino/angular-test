import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-devolopers',
  templateUrl: './devolopers.component.html',
  styleUrls: ['./devolopers.component.css']
})
export class DevolopersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: object = []

  request(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers')
    .subscribe((response)=>{
      this.data = response
      console.log(this.data)
    })
  }

  ngOnInit(): void {
    this.request()
  }

}
