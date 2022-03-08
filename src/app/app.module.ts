import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { BlogComponent } from './components/blog/blog.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { ContactComponent } from './components/contact/contact.component';
import { ErrorComponent } from './components/error/error.component';
import { ForumsComponent } from './components/forums/forums.component';
import { FormsModule } from '@angular/forms';
import { BlogsService } from './blogs.service';
import { BlogCardComponent } from './components/blog-card/blog-card.component';
import { FilterComponent } from './components/filter/filter.component';
import { FullBlogComponent } from './components/full-blog/full-blog.component';
import { CommentsComponent } from './components/comments/comments.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    BlogComponent,
    NavbarComponent,
    ContactComponent,
    ErrorComponent,
    ForumsComponent,
    BlogCardComponent,
    FilterComponent,
    FullBlogComponent,
    CommentsComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule
  ],
  providers: [BlogsService],
  bootstrap: [AppComponent]
})
export class AppModule { }
