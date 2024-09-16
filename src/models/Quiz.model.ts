import { QuestionModel } from './Question.model';

export class QuizModel {
  public response_code: number = 0;
  public results: QuestionModel[] = [];
  public category: string = '';
}
