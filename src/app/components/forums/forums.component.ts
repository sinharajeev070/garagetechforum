import { Component, OnInit } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-forums',
  templateUrl: './forums.component.html',
  styleUrls: ['./forums.component.css']
})
export class ForumsComponent implements OnInit {
  blog:any = [];
  index!: number;
  display = false;
  opacity!: number;
  
  constructor(private blogs:BlogsService) { 
    this.blog = this.blogs.blogData;
    // console.log(this.blog);
  }

  ngOnInit(): void {
  }

  openBlogDetails(i:number){
      this.index=i;
      this.display = true;
  }

  displayChange(display:boolean){
    this.display=display;
  }

}
