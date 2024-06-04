import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class LogService {

  constructor() { }
  printHolaMundo(){
    console.log("Hola Mundo")
  }
}
