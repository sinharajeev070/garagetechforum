import { formatDate } from '@angular/common';
import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-blog',
  templateUrl: './blog.component.html',
  styleUrls: ['./blog.component.css']
})
export class BlogComponent implements OnInit {
  blog:any = {};
  
  today = new Date();
  dd = String(this.today.getDate()).padStart(2, '0');
  mm = String(this.today.getMonth() + 1).padStart(2, '0'); 
  yyyy = this.today.getFullYear();

  currDate:any = this.yyyy + '-' + this.mm + '-' + this.dd; 

  
  constructor(private blogs:BlogsService) { }

  createBlog(blogDetails:any){
    this.blog=blogDetails.value;
    this.blog.likes=0;
    this.blog.comment = [];
    this.blogs.blogData.unshift(this.blog);
    alert("Blog Submitted!")
    blogDetails.reset();
  }

  
 
 
  ngOnInit(): void {
    
  }

}
