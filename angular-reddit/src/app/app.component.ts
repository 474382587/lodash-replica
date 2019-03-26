import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.styl']
})
export class AppComponent {
  addArticle(): boolean {
    console.log(`Adding article title ${title.value} and link ${link.value}`);
    return false;
  }
}
