import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';

import { AppComponent } from './app.component';
import { MyComponentComponent } from './my-component/my-component.component';
import { BoardComponent } from './board/board.component';
import { MyServiceService } from './my-service.service';

@NgModule({
  declarations: [
    AppComponent,
    MyComponentComponent,
    BoardComponent
  ],
  imports: [
    BrowserModule,
    ReactiveFormsModule,
    FormsModule,
    CommonModule
  ],
  providers: [MyServiceService],
  bootstrap: [AppComponent]
})
export class AppModule { }

