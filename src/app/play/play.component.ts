import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { QuizzesService } from '../../services/Quizzes.service';
import { QuizModel } from '../../models/Quiz.model';
import { CategoryModel } from '../../models/Category.model';
import { NgxSpinnerModule, NgxSpinnerService } from 'ngx-spinner';
import { SharedModule } from '../shared/Shared.module';
import { CommonModule } from '@angular/common';
import { QuestionModel } from '../../models/Question.model';

@Component({
  selector: 'app-play',
  standalone: true,
  imports: [SharedModule, NgxSpinnerModule, CommonModule],
  templateUrl: './play.component.html',
  styleUrl: './play.component.scss',
})
export class PlayComponent implements OnInit {
  constructor(
    private route: ActivatedRoute,
    private router: Router,
    private quizzesService: QuizzesService,
    private spinner: NgxSpinnerService
  ) {}

  data: QuizModel = { response_code: 0, results: [], category: '' };
  category: CategoryModel = { name: '', id: 0, code: 0 };
  counter: number = 0;
  answers: string[] = [];
  selectedAnswer: string = '';
  confirmPlay: boolean = false;

  ngOnInit(): void {
    this.spinner.show();

    this.category = this.quizzesService.getCategByName(
      this.route.snapshot.params['quiz']
    );
    setTimeout(() => {
      this.quizzesService.getData(this.category.code).subscribe(
        (response: QuizModel) => {
          response.response_code == 1 && this.router.navigate(['/error']);
          this.data = {
            response_code: response.response_code,
            category: this.category!.name,
            results: response.results,
          };
          localStorage.setItem('current-quiz', JSON.stringify(this.data));
        },
        (error) => {
          console.error('Error fetching quiz data:', error);
          this.router.navigate(['/error']);
        }
      );
      this.spinner.hide();
    }, 2000);
  }

  cancel(): void {
    this.router.navigate(['/home']);
  }

  play(): void {
    this.confirmPlay = true;
  }

  checkAnswers(item: QuestionModel): void {
    if (this.selectedAnswer != '') {
      this.answers.push(
        item.correct_answer == this.selectedAnswer ? 'correct' : 'wrong'
      );
      this.counter != this.data.results.length && this.counter++;
      this.selectedAnswer = '';
    } else {
      var myToastEl = document.getElementById('myToast')!;
      myToastEl.classList.remove('hide');
      myToastEl.classList.add('show');
      setTimeout(() => {
        myToastEl.classList.remove('show');
        myToastEl.classList.add('hide');
      }, 1500);
    }
  }

  selectAnswer(value: string): void {
    this.selectedAnswer = value;
  }

  finish(): void {
    this.checkAnswers(this.data.results.at(this.counter)!);
    localStorage.setItem('results', JSON.stringify(this.answers));
    this.router.navigate([`/finish/${this.category.name.toLowerCase()}`]);
  }
}
