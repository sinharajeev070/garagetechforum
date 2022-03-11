import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {
  
  filterBlogs!:any[];

  constructor(private blogs:BlogsService) {
    this.filterBlogs = this.blogs.blogData; 
    
  }

  ngOnInit(): void {
    
  }

  filterData(filterBlogs:any){
    this.filterBlogs=filterBlogs;
    console.log(filterBlogs);
  }

}
