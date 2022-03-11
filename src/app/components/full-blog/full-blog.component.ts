import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { BlogsService } from 'src/app/blogs.service';

@Component({
  selector: 'app-full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.css']
})
export class FullBlogComponent implements OnInit {
  @Input() blogs!: any[];
  @Input() index!: number;
  @Input() display! :boolean;

  comments:any = [];

  @Output() displayChanged: EventEmitter<boolean> =   new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onCloseBlog(){
    this.display = false;
    this.displayChanged.emit(this.display);
  }

  addComment(comment:any){
    comment.value.commentDate = Date.now();
    console.log(comment.value);
    this.comments.unshift(comment.value);
    console.log(this.comments);
    this.blogs[this.index].comments = this.comments;
    
    comment.reset();
  }

}
