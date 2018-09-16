import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: '../views/app.component.html',
  styleUrls: ['../styles/app.component.css']
})
export class AppComponent implements OnInit {

  public avatarColorList: Array<Array<number>> = [[]];

  public ngOnInit(){
    this.clearCanvas();
  }

  public changeColor(i: number, j: number): void {
    if(this.avatarColorList[i][j] === 3){
      this.avatarColorList[i][j] = 0;
    } else {
      this.avatarColorList[i][j]++;
    }
  }

  public clearCanvas(): void {
    this.avatarColorList = [[]];

    for (let i = 0; i < 16; i++) {
      this.avatarColorList[i] = [];
      for (let j = 0; j < 16; j++) {
        this.avatarColorList[i][j] = 0;
      }
    }
  }

  public sendImage(): void {
    //TODO Send to API
    console.log(JSON.stringify(this.avatarColorList));
  }

}
