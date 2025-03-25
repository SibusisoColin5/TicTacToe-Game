import { Component, OnInit, Input } from '@angular/core';
import { MyServiceService } from '../my-service.service';

@Component({
  selector: 'app-my-component',
  templateUrl: './my-component.component.html',
  styleUrls: ['./my-component.component.css']
})
export class MyComponentComponent implements OnInit {

  @Input() square: any;

  constructor(public gameService: MyServiceService) { }

  ngOnInit(): void {
  }

  changePlayer(): void {
    this.gameService.isGameRunning = true;
    if (this.gameService.isGameRunning && this.square.state === null) {
      this.square.state = this.gameService.activePlayer;
      this.gameService.changePlayerTurn(this.square);
      this.gameService.isGameRunning = !this.gameService.gameOver;
    }
  }
}

