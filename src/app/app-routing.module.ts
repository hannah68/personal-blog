import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { AboutComponent } from './about/about.component';
import { AppComponent } from './app.component';
import { BlogDetailComponent } from './blog/blog-detail/blog-detail.component';
import { BlogComponent } from './blog/blog.component';
import { BooksComponent } from './books/books.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  {path: '', component: HomeComponent}, 
  {path: 'about', component: AboutComponent},
  {path: 'books', component: BooksComponent},
  {path: 'blog', component: BlogComponent, children:[
    {path: ':id', component: BlogDetailComponent}
  ]}
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
