import { Component, inject } from '@angular/core';
import { MatDialog } from '@angular/material/dialog';
import { AppTableComponent } from '../app-table/app-table.component';

@Component({
  selector: 'app-app-start-page',
  templateUrl: './app-start-page.component.html',
  styleUrl: './app-start-page.component.scss'
})
export class AppStartPageComponent {
  public toggle = false;
  public dialog: MatDialog = inject(MatDialog);

  openTable() {
    this.dialog.open(AppTableComponent);
    this.toggle = true;
  }
}
