import { Injectable } from '@angular/core';

@Injectable()
export class SharedService{

  sharedValue: number;

  constructor(){
    console.log('Shared Service initialised');
    this.sharedValue = Math.round(Math.random() * 100);
    console.log(this.sharedValue);
  }

  // tslint:disable-next-line:typedef
  public  getSharedValue() {
    return this.sharedValue;
  }
}

