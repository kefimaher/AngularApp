import { Component } from '@angular/core';
import { tables } from '../models/tables';
import { TablesService } from '../tables.service';

@Component({
  selector: 'app-tables',
  templateUrl: './tables.component.html',
  styleUrls: ['./tables.component.css']
})
export class TablesComponent {
  listTables: any[] = [];

  constructor(private tablesService: TablesService) { }

  ngOnInit(): void {
    this.listTables = this.tablesService.listTables;
  }
}
