import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-publishers',
  templateUrl: './change-publishers.component.html',
  styleUrls: ['./change-publishers.component.css']
})
export class ChangePublishersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: object 
  name: string = 'new publisher'

  request():void{
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers')
    .subscribe((response:object)=>{
      this.data = response
      console.log(this.data)
    })
  }

  ngOnInit(): void {
    this.request()
  }

  handleInput(value:string):void{
    this.name = value
  }

  create():void{
    let body:object = {
      "publisherId": 0,
      'name' : this.name
    }
    this.http.post('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers', body ).subscribe((response:object)=>{
      console.log(response)
      this.request()
    })
  }

  delete(id: number):void{
    this.http.delete('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers/'+id)
    .subscribe((response:object)=>{
      this.request()
    })
  }

}
