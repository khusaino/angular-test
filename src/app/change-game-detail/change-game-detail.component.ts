import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-change-game-detail',
  templateUrl: './change-game-detail.component.html',
  styleUrls: ['./change-game-detail.component.css']
})
export class ChangeGameDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

    id: any = null
    data: any 
    name: string
    freeGenreList: any
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
    };

  dataDevelopers: object 
  dataGenres 
  dataPublishers: object 
  
  // запрос списка разработчиков
  requestDevolopers(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers')
    .subscribe((response)=>{
      this.dataDevelopers = response
      console.log(this.data)
    })
  }
  // запрос списка издатетлй
  requestPublishers(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers')
    .subscribe((response)=>{
      this.dataPublishers = response
    })
  }
  // запрос списка жанров
  requestGenres(){
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres')
    .subscribe((response)=>{
      this.dataGenres = response
      this.filterGenreList()
    })
  }
  // запрос деталей игры
  request(thisId){
      this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games/' + thisId)
      .subscribe((response)=>{
        this.data = response
        this.name = this.data.name
        this.desc = this.data.description
        this.body['publisherId'] = this.data.publisherId
        this.body['developerId']  = this.data.developerId
        this.requestGenres()
      })
  }

  ngOnInit() {
    this.id = this.route.snapshot.paramMap.get('id')
    this.request(this.id)
    this.requestDevolopers()
    this.requestPublishers()
  }
  // фильтрует список жанров, возвращает список жанров которые не находятся в свойстве игры
  filterGenreList(){
    this.freeGenreList = this.dataGenres.filter((elem)=>{
      let res = true
      for(let item of this.data.gameXrefGenre){
        if(elem.genreId === item.genreId){
          res = false
          break
        }else{
          res = true
        }
      }
      return res
    })
  }
  // сохраняет изменеие игры
  cgange(){
    this.body['gameId'] = this.id
    this.body['name'] = this.name
    this.body['description'] = this.desc
      this.http.put('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games/'+this.id, this.body ).subscribe((response)=>{
      console.log(response)
      alert('игра отредоктирована')
      })
  }
  // заполняет свойства body: 'publisherId' и 'developerId'
  handleClick(id, elem){
    this.body[elem] = id
  }
  // удаляет жанры
  deleteGenre(genreId, gameId){
    this.http.delete('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/GameXrefGenres/'+gameId + '?genre_id='+genreId)
    .subscribe(()=>{
      this.request(this.id)
    })
  }
  // добовлят жанры
  addGenre(genreId, gameId){
    let body = {
      "gameId": gameId,
      "genreId": genreId,
    }
    this.http.post('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/GameXrefGenres', body)
    .subscribe(()=>{
      // this.requestGenres()
      this.request(this.id)
    })
  }
}
