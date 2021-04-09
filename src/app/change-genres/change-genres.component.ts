import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-genres',
  templateUrl: './change-genres.component.html',
  styleUrls: ['./change-genres.component.css']
})
export class ChangeGenresComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: object[]
  name: string = 'new publisher'

  rename: object = {}
  nameList: object ={}

  request():void{
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres')
    .subscribe((response:object[])=>{
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
    this.http.post('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres', body ).subscribe((response:object)=>{
      console.log(response)
      this.request()
    })
  }

  saveV(id: number):void{
    console.log('123123')
    let body:object ={
      'genreId': id,
      'name': this.nameList[id] 
    }
    this.http.put('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres/'+id, body)
    .subscribe((response:object)=>{
      this.request()
      this.rename[id] = false
    })
    
  }

  activateInput(id:number, name: string):void{
    this.rename[id] = true
    this.nameList[id] = name;
    console.log(this.rename)
  }

  handleName(value: string, id:number):void{
    this.nameList[id] = value
  }

}
