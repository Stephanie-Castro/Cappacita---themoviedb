import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { HttpClientModule } from '@angular/common/http';
import { PesquisarFilmeComponent } from './components/filmes/pesquisar-filme/pesquisar-filme.component';
import { TopRatedFilmesComponent } from './components/filmes/top-rated-filmes/top-rated-filmes.component';
import { PesquisarTvseriesComponent } from './components/series/pesquisar-tvseries/pesquisar-tvseries.component';
import { TopRatedTvseriesComponent } from './components/series/top-rated-tvseries/top-rated-tvseries.component';
import { FilmesCardComponent } from './components/filmes/filmes-card/filmes-card.component';
import { TvseriesCardComponent } from './components/series/tvseries-card/tvseries-card.component';

import {MatCardModule} from '@angular/material/card';
import { MatSidenavModule } from '@angular/material/sidenav';
import {MatTabsModule} from '@angular/material/tabs';
import { MatIconModule } from '@angular/material/icon';
import { MatListModule } from '@angular/material/list';
import { MatToolbarModule } from '@angular/material/toolbar';
import { MatButtonModule } from '@angular/material/button';
import { MenuTemplateComponent } from './components/shared/menu-template/menu-template.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainFilmesPageComponent } from './components/filmes/main-filmes-page/main-filmes-page.component';
import { MainTvseriesPageComponent } from './components/series/main-tvseries-page/main-tvseries-page.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

@NgModule({
  declarations: [
    AppComponent,
    PesquisarFilmeComponent,
    TopRatedFilmesComponent,
    PesquisarTvseriesComponent,
    TopRatedTvseriesComponent,
    FilmesCardComponent,
    TvseriesCardComponent,
    MenuTemplateComponent,
    HomePageComponent,
    MainFilmesPageComponent,
    MainTvseriesPageComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    MatCardModule,
    MatSidenavModule,
    MatIconModule,
    MatListModule,
    MatToolbarModule,
    MatButtonModule,
    MatTabsModule,
    NgbModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
