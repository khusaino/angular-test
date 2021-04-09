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

    id: number 
    data: any 
    name: string
    freeGenreList: object[]
    desc:string
    dev:string
    publ:string = ''
    body: any = {
      "gameId": 0,
      "name": "string",
      "description": "string",
      "publisherId": 0,
      "developerId": 0,
    };

  dataDevelopers: object[]
  dataGenres: object[]
  dataPublishers: object[]
  
  // запрос списка разработчиков
  requestDevolopers():void{
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers')
    .subscribe((response:object[])=>{
      this.dataDevelopers = response
      console.log(this.data)
    })
  }
  // запрос списка издатетлй
  requestPublishers():void{
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers')
    .subscribe((response:object[])=>{
      this.dataPublishers = response
    })
  }
  // запрос списка жанров
  requestGenres():void{
    this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Genres')
    .subscribe((response:object[])=>{
      this.dataGenres = response
      this.filterGenreList()
    })
  }
  // запрос деталей игры
  request(thisId:number):void{
      this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games/' + thisId)
      .subscribe((response:object)=>{
        this.data = response
        this.name = this.data.name
        this.desc = this.data.description
        this.body['publisherId'] = this.data.publisherId
        this.body['developerId']  = this.data.developerId
        this.requestGenres()
      })
  }

  ngOnInit() :void{
    this.id = +this.route.snapshot.paramMap.get('id')
    this.request(this.id)
    this.requestDevolopers()
    this.requestPublishers()
  }
  // фильтрует список жанров, возвращает список жанров которые не находятся в свойстве игры
  filterGenreList():void{
    this.freeGenreList = this.dataGenres.filter((elem:object):boolean=>{
      let res = true
      for(let item of this.data.gameXrefGenre){
        if(elem["genreId"] === item.genreId){
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
  cgange():void{
    this.body['gameId'] = this.id
    this.body['name'] = this.name
    this.body['description'] = this.desc
      this.http.put('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games/'+this.id, this.body ).subscribe((response:object)=>{
      console.log(response)
      alert('игра отредоктирована')
      })
  }
  // заполняет свойства body: 'publisherId' и 'developerId'
  handleClick(id:number, elem:string):void{
    this.body[elem] = id
  }
  // удаляет жанры
  deleteGenre(genreId:number, gameId:number):void{
    this.http.delete('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/GameXrefGenres/'+gameId + '?genre_id='+genreId)
    .subscribe(()=>{
      this.request(this.id)
    })
  }
  // добовлят жанры
  addGenre(genreId:number, gameId:number):void{
    let body:object = {
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
