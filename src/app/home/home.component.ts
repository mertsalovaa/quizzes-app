import { Component, OnInit } from '@angular/core';
import { Router, RouterOutlet } from '@angular/router';
import { QuizzesService } from '../../services/Quizzes.service';
import { QuestionModel } from '../../models/Question.model';
import { QuizModel } from '../../models/Quiz.model';
import { NgFor, NgOptimizedImage } from '@angular/common';
import { categories } from '../../utils/categories';
import { CategoryModel } from '../../models/Category.model';
import { FooterComponent } from '../shared/footer.component';
import { SharedModule } from '../shared/Shared.module';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet, NgFor, NgOptimizedImage, SharedModule],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss',
})
export class HomeComponent implements OnInit {
  constructor(private quizzService: QuizzesService, private router: Router) {}
  data: QuizModel[] = [];
  getCategories(): CategoryModel[] {
    return categories;
  }
  ngOnInit(): void {
  }

  goToPlay(quiz: string) {
    this.router.navigate([`play/${quiz}`]);
  }
}
