import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root',
})
export class ProfilerService {
  constructor() {}

  log(data: any): void {
    console.log(data);
  }
}
