
export class QuestionModel {
   public id: number = 0;
   public difficulty: string = '';
   public type: boolean = false;
   public category: string = '';
   public question: string = '';
   public correct_answer: string = '';
   public incorrect_answers: string[] = [];
}