import { Component, Input, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  cards:any = [];

  constructor(private blogs:BlogsService) {
    this.cards = this.blogs.filterBlogData;
  }

  ngOnInit(): void {
  }

  openBlogDetails(i:number){
    alert("Blog Details \nBlog Title : " + this.cards[i].title + "\nBlog Category : " + this.cards[i].postCategory +
          "\nBlog Submission Date : " + this.cards[i].postDate + "\nAuthor : " + this.cards[i].author);
  }

  onLike(i:number){
    this.cards[i].likes++;
  }
}
