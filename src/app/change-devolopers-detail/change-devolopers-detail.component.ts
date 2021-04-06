import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';

@Component({
  selector: 'app-change-devolopers-detail',
  templateUrl: './change-devolopers-detail.component.html',
  styleUrls: ['./change-devolopers-detail.component.css']
})
export class ChangeDevolopersDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

    id: any = null
    data: any 
    name: string

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id')
      this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers/' + this.id)
      .subscribe((response)=>{
        this.data = response
        this.name = this.data.name
        console.log(this.data)
      })
      
    }

  handleInput(value){
    this.name = value
    console.log(this.name)
  }

  change(){
    let body = {
      'developerId': this.id,
      'name': this.name,
    }
    this.http.put('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Developers/' + this.id, body)
    .subscribe(response=>{
      console.log(response)
    })
  }

}
