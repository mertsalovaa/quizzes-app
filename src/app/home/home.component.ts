import { Component, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { QuizzesService } from '../../services/Quizzes.service';

@Component({
  selector: 'app-home',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './home.component.html',
  styleUrl: './home.component.scss'
})
export class HomeComponent implements OnInit {
  constructor(private quizzService: QuizzesService) { }  
  data: string = '';
  title = 'Dad jokes';
  ngOnInit(): void {
    this.quizzService.getData().subscribe((data: any) => {
      this.data = data
    });
    throw new Error('Method not implemented.');
  }
}
