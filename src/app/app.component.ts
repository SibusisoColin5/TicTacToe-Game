// // import { Component } from '@angular/core';
// // import { MyServiceService } from './my-service.service';
// //
// // @Component({
// //   selector: 'app-root',
// //   templateUrl: './app.component.html',
// //   styleUrls: ['./app.component.css']
// // })
// // export class AppComponent {
// //   title = 'SIBUSISO';
// //
// //   playerNames = {
// //     'X': 'Player 1',
// //     'O': 'Player 2'
// //   }
// //
// //
// //   constructor(public gameService: MyServiceService) {}
// //
// //   resetGame()
// //   {
// //     this.gameService.newGame();
// //   }
// //   get activePlayerName()
// //   {
// //     return this.playerNames[this.gameService.activePlayer] as 'X' | 'O';
// //   }
// //
// //   get winnerName(){
// //     return this.playerNames[this.gameService.activePlayer];
// //   }
// // }
// //
// //
//
// import { Component } from '@angular/core';
// import { MyServiceService } from './my-service.service';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'SIBUSISO';
//
//   playerNames = {
//     'X': 'Player 1',
//     'O': 'Player 2'
//   }
//
//   constructor(public gameService: MyServiceService) {}
//
//   resetGame() {
//     this.gameService.newGame();
//   }
//
//   get activePlayerName() {
//     return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
//   }




//
//   get winnerName() {
//     return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
//   }
// }
//
// import { Component } from '@angular/core';
// import { MyServiceService } from './my-service.service';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'SIBUSISO';
//
//   playerNames = {
//     'X': 'Player 1',
//     'O': 'Player 2'
//   };
//
//   constructor(public gameService: MyServiceService) {}
//
//   resetGame() {
//     this.gameService.newGame();
//   }
//
//   get activePlayerName() {
//     return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
//   }
//
//   get winnerName() {
//     return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
//   }
// }

//
// import { Component } from '@angular/core';
// import { MyServiceService } from './my-service.service';
//
// @Component({
//   selector: 'app-root',
//   templateUrl: './app.component.html',
//   styleUrls: ['./app.component.css']
// })
// export class AppComponent {
//   title = 'SIBUSISO';
//
//   playerNames = {
//     'X': '',
//     'O': ''
//   };
//
//   constructor(public gameService: MyServiceService) {}
//
//   startGame() {
//     if (this.playerNames['X'] && this.playerNames['O']) {
//       this.gameService.isGameRunning = true;
//       this.resetGame();
//     }
//   }
//
//   resetGame() {
//     this.gameService.newGame();
//     this.gameService.isGameRunning=false;
//     this.playerNames = {'X':'','O':''};
//   }
//
//   get activePlayerName() {
//     return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
//   }
//
//   get winnerName() {
//     return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
//   }
// }

import { Component } from '@angular/core';
import { MyServiceService } from './my-service.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'SIBUSISO';

  playerNames = {
    'X': '',
    'O': ''
  };

  constructor(public gameService: MyServiceService) {}

  startGame() {
    if (this.playerNames['X'] && this.playerNames['O']) {
      this.gameService.isGameRunning = true;
      this.gameService.newGame();
    }
  }

  resetGame() {
    this.gameService.newGame();
    this.gameService.isGameRunning = false;
    this.playerNames = { 'X': '', 'O': '' };
  }

  get activePlayerName() {
    return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
  }

  get winnerName() {
    return this.playerNames[this.gameService.activePlayer as 'X' | 'O'];
  }
}


