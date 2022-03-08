import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { BlogComponent } from './components/blog/blog.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ForumsComponent } from './components/forums/forums.component';
import { FullBlogComponent } from './components/full-blog/full-blog.component';
import { HomeComponent } from './components/home/home.component';

const routes: Routes = [
                        {path: "", component:HomeComponent},
                        {path: "home", component:HomeComponent},
                        {path: "blog", component:BlogComponent},
                        {path: "contact", component:ContactComponent},
                        {path: "forums", component:ForumsComponent},
                        {path: "**", component:ErrorComponent},
                      ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
