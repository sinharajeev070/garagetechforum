import { Component, Input, OnInit } from '@angular/core';


@Component({
  selector: 'app-blog-card',
  templateUrl: './blog-card.component.html',
  styleUrls: ['./blog-card.component.css']
})
export class BlogCardComponent implements OnInit {
  
  @Input()cards!: any[];

  index!: number;
  display! :boolean;

  constructor() {}

  ngOnInit(): void {
  }

  openBlogDetails(i:number){
  // console.log(i);
   this.index = i;
   this.display = true;
  }

  onLike(i:number){
    this.cards[i].likes++;
  }

  displayChange(display:boolean){
    this.display=display;
  }
}
