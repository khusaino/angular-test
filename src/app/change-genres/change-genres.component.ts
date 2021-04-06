import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-genres',
  templateUrl: './change-genres.component.html',
  styleUrls: ['./change-genres.component.css']
})
export class ChangeGenresComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: object = []
  name: string = 'new publisher'

  rename: object = {}
  nameList: object = {}

  request(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres')
    .subscribe((response)=>{
      this.data = response
      console.log(this.data)
    })
  }

  ngOnInit(): void {
    this.request()
  }

  handleInput(value:string){
    this.name = value
  }

  create(){
    let body:object = {
      "publisherId": 0,
      'name' : this.name
    }
    this.http.post('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres', body ).subscribe((response)=>{
      console.log(response)
      this.request()
    })
  }

  saveV(id: string){
    console.log('123123')
    let body:object ={
      'genreId': id,
      'name': this.nameList[id] 
    }
    this.http.put('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres/'+id, body)
    .subscribe((response)=>{
      this.request()
      this.rename[id] = false
    })
    
  }

  activateInput(id:string, name: string){
    this.rename[id] = true
    this.nameList[id] = name;
    console.log(this.rename)
  }

  handleName(value: string, id:string){
    this.nameList[id] = value
  }

}
