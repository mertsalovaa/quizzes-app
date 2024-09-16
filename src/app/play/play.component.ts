import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzesService } from '../../services/Quizzes.service';
import { QuizModel } from '../../models/Quiz.model';
import { CategoryModel } from '../../models/Category.model';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
})
export class PlayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    public quizzesService: QuizzesService
  ) {}

  data: QuizModel | undefined;
  category: CategoryModel | undefined;

  ngOnInit(): void {
    this.category = this.quizzesService.getCategByName(
      this.route.snapshot.params['quiz']
    );
    this.quizzesService.getData(this.category.code).subscribe(
      (response: QuizModel) => {
        response.response_code == 1 && this.router.navigate(['/error']);

        console.log(response);
        this.data = {
          response_code: response.response_code,
          category: this.category!.name,
          results: response.results,
        };
      },
      (error) => {
        console.error('Error fetching quiz data:', error);
        this.router.navigate(['/error']);
      }
    );
  }
}
