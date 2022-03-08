import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog:any = {};
  constructor(private blogs:BlogsService) { }

  createBlog(blogDetails:any){
    this.blog=blogDetails.value;
    this.blog.likes=0;
    this.blogs.blogData.unshift(this.blog);
    alert("Blog Submitted!")
    blogDetails.reset();
  }
  ngOnInit(): void {
    
  }

}
