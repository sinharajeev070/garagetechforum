import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';

@Component({
  selector: 'app-full-blog',
  templateUrl: './full-blog.component.html',
  styleUrls: ['./full-blog.component.css']
})
export class FullBlogComponent implements OnInit {
  @Input() blogs!: any[];
  @Input() index!: number;
  @Input() display! :boolean;

  comment:any = {};

  @Output() displayChanged: EventEmitter<boolean> =   new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onCloseBlog(){
    this.display = false;
    this.displayChanged.emit(this.display);
  }

  addComment(comment:any){
    this.comment.comment= comment.value.comment;
    this.comment.commentBy=comment.value.name;
    this.comment.commentDate = Date.now();

    this.blogs[this.index].comments.unshift(this.comment);
    comment.reset();
  }

}
