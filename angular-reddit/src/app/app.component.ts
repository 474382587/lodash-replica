import { Component, OnInit } from '@angular/core';
import { Article } from './article/article.model'
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent implements OnInit {

  articles: Article[]; // <-- component property

  constructor() {
    this.articles = [
      new Article('Angular Reddit', 'http://angular.io', 3),
      new Article('React Reddit', 'http://angular.io', 4),
      new Article('Vue Reddit', 'http://angular.io', 6)
    ]
  }
  ngOnInit() {
    // ...
  }
  addArticle(title: HTMLInputElement, link: HTMLInputElement): boolean {
    console.log(`Adding article title ${title.value} and link ${link.value}`);
    this.articles.push(new Article(title.value, link.value, 0))
    title.value = ''
    link.value = ''
    return false;
  }

  sortedArticles(): Article[] {
    return this.articles.sort((a: Article, b: Article) => {
      return a.votes - b.votes
    })
  }

}
