import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-devolopers',
  templateUrl: './change-devolopers.component.html',
  styleUrls: ['./change-devolopers.component.css']
})
export class ChangeDevolopersComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: any 
  name: string = 'new devoloper'

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

  handleInput(value: string):void{
    this.name = value
  }

  create():void{
    let body:object = {
      "developerId": 0,
      'name' : this.name
    }
    this.http.post('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers', body ).subscribe((response: object)=>{
      this.request()
    })
  }

  delete(id: number):void{
    this.http.delete('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers/'+id)
    .subscribe((response:object)=>{
      this.request()
    })
  }
}
