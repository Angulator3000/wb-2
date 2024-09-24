import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement, ELEMENT_DATA } from '../../../../base-data/base-data'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
// import { ELEMENT_DATA } from '..a';
@Component({
  selector: 'app-app-table',
  templateUrl: './app-table.component.html',
  styleUrl: './app-table.component.scss'
})
export class AppTableComponent    {
  dataSource: MatTableDataSource<PeriodicElement>;
  displayColumns: string[]= this.generateDisplayColumns();

  constructor() {
    this.dataSource = new MatTableDataSource(ELEMENT_DATA);
  }

  @ViewChild(MatSort) sort?: MatSort;

  ngAfterViewInit(): void {
    if (this.sort) {
      this.dataSource.sort = this.sort;
    };

  }
  
  generateDisplayColumns(): string[] {
    return Object.keys(ELEMENT_DATA[0]);
  };

  applyFilter(event: Event): void {
    const targ = event.target as HTMLInputElement;
    if (targ) {
      this.dataSource.filter = targ.value.trim().toLowerCase();
    };
  };
}


