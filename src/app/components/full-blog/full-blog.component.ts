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

  @Output() displayChanged: EventEmitter<boolean> =   new EventEmitter();


  constructor() { }

  ngOnInit(): void {
  }

  onCloseBlog(){
    this.display = false;
    this.displayChanged.emit(this.display);
  }

}
