import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';

import { HeaderComponent } from './components/header/header.component';
import { NewsComponent } from './components/news/news.component';
import { New2Component } from './components/new2/new2.component';
import { NewsContentComponent } from './components/news-content/news-content.component';
import { ShoplistComponent } from './components/shoplist/shoplist.component';
const routes: Routes = [
  {
    path: 'header',
    component:HeaderComponent
    // children: []
  },
  {
    path: 'news',
    component:NewsComponent
  },
  {
    path: 'new2',
    component:New2Component
  },
  {
    path: 'content/:aid',
    component:NewsContentComponent
  },
  {
    path: 'shoplist',
    component:ShoplistComponent
  },
  {
    path: '',
    redirectTo: 'header',
    pathMatch: 'full'
  },
  {
    path: '**',
    component: HeaderComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
