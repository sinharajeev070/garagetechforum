import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class BlogsService {

  constructor() { }

  blogData:any = [{
    author: "Rajeev",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
    postCategory: "abc",
    postDate: Date.now(),
    title: "This is Title1",
    likes: 0,
    comments: []
  },
  {
    author: "John",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
    postCategory: "abc",
    postDate: Date.now(),
    title: "This is Title2",
    likes: 0,
    comments: []
  },
  {
    author: "Steve",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
    postCategory: "abc",
    postDate: Date.now(),
    title: "This is Title3",
    likes: 0,
    comments: []
  },
  {
    author: "Harvy",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
    postCategory: "abc",
    postDate: Date.now(),
    title: "This is Title4",
    likes: 0,
    comments: []
  },
  {
    author: "Davison",
    content: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Minus nisi consequatur, explicabo ipsam vel, autem laborum molestiae reiciendis ullam iure ab? Accusamus rerum placeat neque quis in. Officia, atque aspernatur! Aliquam tempore nobis sunt dolorem iste totam debitis error ab perferendis nihil magnam qui repellat, dicta, maiores pariatur ullam minima?",
    postCategory: "abc",
    postDate: Date.now(),
    title: "This is Title5",
    likes: 0,
    comments: []
  }

];

}
