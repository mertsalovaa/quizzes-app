import { Component } from '@angular/core';

@Component({
  selector: 'app-footer',
  template: `
    <footer class="d-flex justify-content-between flex-wrap-reverse align-items-center">
      <p>by iryna mertsalova</p>
      <h5 class="d-flex align-items-center ">• Quizzes •</h5>
      <p>all rights reserved.</p>
    </footer>
  `,
  styleUrls: ['../../styles.scss'],
})
export class FooterComponent {}
