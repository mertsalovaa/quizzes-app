import { Component, OnInit } from '@angular/core';
import { SharedModule } from '../shared/Shared.module';
import { CategoryModel } from '../../models/Category.model';
import { QuizzesService } from '../../services/Quizzes.service';
import { ActivatedRoute, Router } from '@angular/router';
import { ResultData } from '../../utils/result-data';

@Component({
  selector: 'app-finish',
  standalone: true,
  imports: [SharedModule],
  templateUrl: './finish.component.html',
  styleUrls: ['./finish.component.scss', '../../styles.scss'],
})
export class FinishComponent implements OnInit {
  constructor(
    private quizzesService: QuizzesService,
    private route: ActivatedRoute,
    private router: Router
  ) {}

  result: [] = [];
  comment: { text: string; icon: string } = { text: '', icon: '' };
  correctAnswers: number = 0;
  category: CategoryModel = { name: '', id: 0, code: 0 };

  ngOnInit(): void {
    this.category = this.quizzesService.getCategByName(
      this.route.snapshot.params['quiz']
    );
    this.result = JSON.parse(localStorage.getItem('results')!);
    this.correctAnswers = this.result.filter((x) => x == 'correct')?.length;
    if (this.correctAnswers >= 3) {
      this.comment = ResultData[0];
    }
    if (this.correctAnswers >= 5) {
      this.comment = ResultData[1];
    }
    if (this.correctAnswers >= 8) {
      this.comment = ResultData[2];
    }
    if (this.correctAnswers >= 10) {
      this.comment = ResultData[3];
    }
  }

  backToHome(): void {
    localStorage.clear();
    this.router.navigate(['/home']);
  }
}
