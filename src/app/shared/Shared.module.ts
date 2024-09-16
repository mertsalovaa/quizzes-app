import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FooterComponent } from './footer.component';

@NgModule({
  declarations: [FooterComponent],
  imports: [CommonModule],
  exports: [FooterComponent] // Експортуй компонент, якщо плануєш використовувати його в інших модулях
})
export class SharedModule {}