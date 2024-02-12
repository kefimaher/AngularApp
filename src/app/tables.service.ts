import { Injectable } from '@angular/core';
import { tables } from './models/tables';

@Injectable({
  providedIn: 'root'
})
export class TablesService {
  listTables:tables[]=[
    {id:1,nom:'une'},
    {id:2,nom:'deux'},
    {id:3,nom:'trois'}
  ]
  constructor() { }
}
