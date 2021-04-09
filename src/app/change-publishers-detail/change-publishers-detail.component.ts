import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-change-publishers-detail',
  templateUrl: './change-publishers-detail.component.html',
  styleUrls: ['./change-publishers-detail.component.css']
})
export class ChangePublishersDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

    id: number
    data: object 
    name: string

  ngOnInit():void {
      this.id = +this.route.snapshot.paramMap.get('id')
      this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers/' + this.id)
      .subscribe((response:object)=>{
        this.data = response
        this.name = this.data['name']
        console.log(this.data)
      })
      
    }

  handleInput(value:string):void{
    this.name = value
    console.log(this.name)
  }

  change():void{
    let body:object = {
      'publisherId': this.id,
      'name': this.name,
    }
    this.http.put('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Publishers/' + this.id, body)
    .subscribe((response:object)=>{
      console.log(response)
    })
  }

}
