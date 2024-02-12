import { Injectable } from '@angular/core';
import { inscrire } from '../models/inscrire';

@Injectable({
  providedIn: 'root'
})
export class InscrireService {

  listProducts:inscrire[]=[
    {nom:'maher',password:'azerty'},
  ]

  constructor() { }
  // this inscrire componet
  inscrire(i:inscrire){
    this.listProducts.push(i);
  }
  
}
