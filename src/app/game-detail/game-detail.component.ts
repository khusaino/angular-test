import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute} from '@angular/router';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'app-game-detail',
  templateUrl: './game-detail.component.html',
  styleUrls: ['./game-detail.component.css']
})
export class GameDetailComponent implements OnInit {

  constructor(
    private route: ActivatedRoute,
    private http: HttpClient
  ) { }

    id: any = null
    data: any 

  ngOnInit() {
      this.id = this.route.snapshot.paramMap.get('id')
      this.http.get('http://api.pulter.tv/0CD29A8C-8968-4D0F-9F00-921DDDD938C3/api/Games/' + this.id)
      .subscribe((response)=>{
        this.data = response
        console.log(this.data)
      })
    }
  

}
