import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  blogData:any = [{
    author: "Rajeev",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
    postCategory: "First",
    postDate: Date.now(),
    title: "This is Title",
    likes: 0,
    comments: [{
      commentDate: "2022-03-09",
      comment: "Loved this Blog",
      commentBy: "Viewer1"
    }]
  }
];

}
