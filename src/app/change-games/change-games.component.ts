import { Component, OnInit } from '@angular/core';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-games',
  templateUrl: './change-games.component.html',
  styleUrls: ['./change-games.component.css']
})
export class ChangeGamesComponent implements OnInit {

  constructor(private http: HttpClient) { }

  data: object = []
  dataDevelopers: object = []
  dataGenres: object = []
  dataPublishers: object = []
  request(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games')
    .subscribe((response)=>{
      this.data = response
      console.log(this.data)
    })
  }
  requestDevolopers(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers')
    .subscribe((response)=>{
      this.dataDevelopers = response
      console.log(this.data)
    })
  }
  requestPublishers(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers')
    .subscribe((response)=>{
      this.dataPublishers = response
      console.log(this.data)
    })
  }
  requestGenres(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres')
    .subscribe((response)=>{
      this.dataGenres = response
      console.log(this.data)
    })
  }

  ngOnInit(): void {
    this.request()
    this.requestDevolopers()
    this.requestPublishers()
    this.requestGenres()
  }



  delete(id: number){
    this.http.delete('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games/'+id)
    .subscribe((response)=>{
      console.log(response)
      this.request()
    })
  }


  // create a new game

  name: string
  desc:string
  dev:any
  publ:any = ''
  genre: any = {}
  body: any = {
    "gameId": 0,
    "name": "string",
    "description": "string",
    "publisherId": 0,
    "developerId": 0,
    "gameXrefGenre": []
  };


  createGenreArr(){
    let res = []
    for(let elem in this.genre){
      let genre = {
        "gameId": 0,
        'genreId': this.genre[elem]
      }
      res.push(genre)
    }
    return res
  }
  
  create(){
    this.body['name'] = this.name
    this.body['description'] = this.desc
    this.body['gameXrefGenre'] = this.createGenreArr()
    if(this.body.developerId === 0){
      return alert("Выберите разработчика!!!")
    }
    else{
      this.http.post('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games', this.body ).subscribe((response)=>{
      console.log(response)
      this.request()
      alert('игра создана')
      })
    }
    
    console.log(this.body)
  }
  handleChecked(id:string, checked:boolean){
    if(checked){
      this.genre['genre'+id] = id
    }
    else{
      delete this.genre['genre'+id]
    }
  }

  handleClick(id, elem){
    this.body[elem] = id
    console.log(id, elem, this.body)
  }

}
