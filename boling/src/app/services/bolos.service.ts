import { Injectable } from '@angular/core';
import { Lista } from '../models/lista.model';

@Injectable({
  providedIn: 'root'
})
export class BolosService {
   listas: Lista[] = [];
  constructor() {
    console.log('Servicio ON');

  }
}
