import { Component, OnInit, ViewChild } from '@angular/core';
import { PeriodicElement, ELEMENT_DATA } from '../base-data/base-data.module'
import { MatTableDataSource } from '@angular/material/table';
import { MatSort } from '@angular/material/sort';
// import { ELEMENT_DATA } from '..a';
@Component({
  selector: 'app-app-table',
  templateUrl: './app-table.component.html',
  styleUrl: './app-table.component.scss'
})
export class AppTableComponent    {

displayColumns: string[] = ['position', 'name', 'weight', 'symbol'];
dataSource  = new MatTableDataSource (ELEMENT_DATA)
@ViewChild(MatSort) sort?: MatSort;
ngAfterViewInit(): void {
  if(this.sort)
  this.dataSource.sort = this.sort;
}
applyFilter(value:Event){
  const targ = value.target as HTMLInputElement;
  if(targ){
    this.dataSource.filter = targ.value.trim().toLowerCase();
  }
}
}


