import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { MainFilmesPageComponent } from './components/filmes/main-filmes-page/main-filmes-page.component';
import { PesquisarFilmeComponent } from './components/filmes/pesquisar-filme/pesquisar-filme.component';
import { TopRatedFilmesComponent } from './components/filmes/top-rated-filmes/top-rated-filmes.component';
import { HomePageComponent } from './components/home-page/home-page.component';
import { MainTvseriesPageComponent } from './components/series/main-tvseries-page/main-tvseries-page.component';
import { PesquisarTvseriesComponent } from './components/series/pesquisar-tvseries/pesquisar-tvseries.component';
import { TopRatedTvseriesComponent } from './components/series/top-rated-tvseries/top-rated-tvseries.component';
import { MenuTemplateComponent } from './components/shared/menu-template/menu-template.component';

const routes: Routes = [
  {
    path: '',
    component: MenuTemplateComponent,
    children: [
      {
        path: '',
        component: HomePageComponent
      },
      {
        path: 'filmes',
        component: MainFilmesPageComponent
      },
      {
        path: 'tvseries',
        component: MainTvseriesPageComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
