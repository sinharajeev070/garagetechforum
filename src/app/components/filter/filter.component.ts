import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-filter',
  templateUrl: './filter.component.html',
  styleUrls: ['./filter.component.css']
})
export class FilterComponent implements OnInit {
  filterBlogs:any =[];
  searchType:string = "";
  
  @Output() filteredData = new EventEmitter<any>();

  constructor(private blogs:BlogsService) { 
    this.filterBlogs=this.blogs.blogData;
    this.filteredData.emit(this.filterBlogs);
  }

  ngOnInit(): void {
    
  }

  searchIn(event:any){
    this.searchType = event.target.value;
    // console.log(this.searchType);
  }

  search(event:any){
      
      if(this.searchType==="title"){
        this.filterBlogs=this.blogs.blogData.filter((ele: {title: string})=>ele.title.toLowerCase().includes(event.target.value.toLowerCase()));
        this.filteredData.emit(this.filterBlogs);
      }
      else if(this.searchType==="post-category"){
        this.filterBlogs=this.blogs.blogData.filter((ele: { postCategory: string })=>ele.postCategory.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
        this.filteredData.emit(this.filterBlogs);
      }
      else if(this.searchType==="author"){
        this.filterBlogs=this.blogs.blogData.filter((ele: { author: string })=>ele.author.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase()));
        this.filteredData.emit(this.filterBlogs);
      }
      else{
        this.filterBlogs=this.blogs.blogData;
        this.filteredData.emit(this.filterBlogs);
      }
  }
  
}

