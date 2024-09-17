import { Component } from '@angular/core';

@Component({
  selector: 'app-header',
  template: `
    <span class="header d-flex justify-content-center">
      <h2>•</h2>
      <h1 class="px-2">Quizzes</h1>
      <h2>•</h2>
    </span>
  `,
  styleUrls: ['../../styles.scss'],
})
export class HeaderComponent {}
