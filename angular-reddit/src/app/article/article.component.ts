import { Component, OnInit, HostBinding } from '@angular/core';
import { Article } from './article.model';

@Component({
  selector: 'app-article',
  templateUrl: './article.component.html',
  styleUrls: ['./article.component.styl']
})
export class ArticleComponent implements OnInit {
  articles: Article[]; // <-- component property
  @HostBinding('attr.class') cssClass = 'row';
  article: Article

  constructor() {
    this.article = new Article(
      'Angular',
      'http://angular.io',
      10
    )
  }
  voteUp() {
    this.article.voteUp();
    return false;
  }

  voteDown() {
    this.article.voteDown();
    return false;
  }

  ngOnInit() {
  }

}
