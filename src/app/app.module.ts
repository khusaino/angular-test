import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { Routes, RouterModule } from "@angular/router";
import { FormsModule } from "@angular/forms";

// import {  } from "./new";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { ChangeDevolopersComponent } from './change-devolopers/change-devolopers.component';
import { ChangePublishersComponent } from './change-publishers/change-publishers.component';
import { ChangeGenresComponent } from './change-genres/change-genres.component';
import { ChangeGamesComponent } from './change-games/change-games.component';
import { DevolopersComponent } from './devolopers/devolopers.component';
import { GamesComponent } from './games/games.component';
import { PublishersComponent } from './publishers/publishers.component';
import { GameDetailComponent } from './game-detail/game-detail.component';
import { PublisherDetailComponent } from './publisher-detail/publisher-detail.component';
import { DeveloperDetailComponent } from './developer-detail/developer-detail.component';
import { ChangeDevolopersDetailComponent } from './change-devolopers-detail/change-devolopers-detail.component';
import { ChangePublishersDetailComponent } from './change-publishers-detail/change-publishers-detail.component';
import { ChangeGameDetailComponent } from './change-game-detail/change-game-detail.component';


const appRouutes: Routes =[
  {path: 'games', component: GamesComponent},
  {path: 'games/:id', component: GameDetailComponent},
  {path: 'devolopers', component: DevolopersComponent},
  {path: 'developers/:id', component: DeveloperDetailComponent},
  {path: 'publishers', component: PublishersComponent},
  {path: 'publishers/:id', component: PublisherDetailComponent},
  {path: 'changeGames', component: ChangeGamesComponent},
  {path: 'changeGames/:id', component: ChangeGameDetailComponent},
  {path: 'changeDevolopers', component: ChangeDevolopersComponent},
  {path: 'changeDevolopers/:id', component: ChangeDevolopersDetailComponent},
  {path: 'changeGenres', component: ChangeGenresComponent},
  {path: 'changePublishers', component: ChangePublishersComponent},
  {path: 'changePublishers/:id', component: ChangePublishersDetailComponent},
  {path: '**', redirectTo: '/games', pathMatch: 'full'},
  {path: '', redirectTo: '/games', pathMatch: 'full'}
]

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    ChangeDevolopersComponent,
    ChangePublishersComponent,
    ChangeGenresComponent,
    ChangeGamesComponent,
    DevolopersComponent,
    GamesComponent,
    PublishersComponent,
    GameDetailComponent,
    PublisherDetailComponent,
    DeveloperDetailComponent,
    ChangeDevolopersDetailComponent,
    ChangePublishersDetailComponent,
    ChangeGameDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    RouterModule.forRoot(appRouutes),
    HttpClientModule,
    FormsModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
