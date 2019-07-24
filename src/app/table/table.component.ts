import { TableService } from './table.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})
export class TableComponent implements OnInit {
  columnDefs;
  rowData;
  constructor(service:TableService) { 
      this.columnDefs = service.getCols();
      this.rowData = service.getRows();
  }
  ngOnInit() {
  }
}
