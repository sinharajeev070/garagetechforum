import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterBlogs:any = [];
  searchType:string = "";

  constructor(private blogs:BlogsService) { 
    // this.filterBlogs=this.blogs.blogData;
  }

  ngOnInit(): void {
    
  }

  searchIn(event:any){
    this.searchType = event.target.value;
    // console.log(this.searchType);
  }

  search(event:any){
      if(this.searchType==="title"){
        this.filterBlogs=this.blogs.blogData.filter((ele: {title: string})=>ele.title.includes(event.target.value));
      }
      else if(this.searchType==="post-category"){
        this.filterBlogs=this.blogs.blogData.filter((ele: { postCategory: string })=>ele.postCategory.includes(event.target.value));
      }
      else if(this.searchType==="author"){
        this.filterBlogs=this.blogs.blogData.filter((ele: { author: string })=>ele.author.includes(event.target.value));
      }
      else{
        this.filterBlogs=this.blogs.blogData;
      }
      this.blogs.filterBlogData = this.filterBlogs;
      console.log(this.blogs.filterBlogData); 
  }
}

