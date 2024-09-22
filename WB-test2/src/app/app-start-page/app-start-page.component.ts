import { Component } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppTableComponent } from '../app-table/app-table.component';

@Component({
  selector: 'app-app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrl: './app-start-page.component.scss'
})
export class AppStartPageComponent {
  constructor(public dialog:MatDialog){

  }
  bolen:boolean = false;
  showTable(){
    this.dialog.open(AppTableComponent)
  }
}
