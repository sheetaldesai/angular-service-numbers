import { Injectable } from '@angular/core';

@Injectable()
export class DataService {

  private alphaNumbers : number[] = [];
  private betaNumbers : number[] = [];
  private diff : number;

  constructor() { }

  getAlphaNumber() {
    this.alphaNumbers.push(Math.floor(Math.random() * 100) + 1);
    return this.alphaNumbers;
  }

  getBetaNumber() {
    this.betaNumbers.push(Math.floor(Math.random() * 100) + 1);
    return this.betaNumbers;
  }

  getDiff() {
    return this.diff;
  }

  setDiff() {
    let sumAlpha = this.alphaNumbers.reduce((a,b)=>a+b,0);
    let sumBeta = this.betaNumbers.reduce((a,b)=>a+b,0);
    console.log(sumAlpha, sumBeta);
    this.diff = sumBeta - sumAlpha;
    return this.diff;
  }


}
