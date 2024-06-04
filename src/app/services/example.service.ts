import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ExampleService {

  constructor() { }

  consoleMessage(msg: string) {
    alert(`This is my message: ${msg}`)
  }
}
