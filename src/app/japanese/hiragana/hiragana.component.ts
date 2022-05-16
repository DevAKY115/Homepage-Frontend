import { Component, OnInit } from '@angular/core';
import {Vocab} from "../vocabs/vocabs.component";

@Component({
  selector: 'app-hiragana',
  templateUrl: './hiragana.component.html',
  styleUrls: ['./hiragana.component.css']
})
export class HiraganaComponent implements OnInit {

  romajiText : string = "a";
  score : number = 0;
  round : number = 0;
  previousResult : string = "";

  hiraganaArray : string[] = ["a","ka","sa",  "ta", "na","ha","ma","ra","ya","wa",
                              "i","ki","shi", "chi","ni","hi","mi","ri",
                              "u","ku","su",  "tsu","nu","fu","mu","ru","yu","n",
                              "e","ke","se",  "te", "ne","he","me","re",
                              "o","ko","so",  "to", "no","ho","mo","ro","yo","wo"]
  roundArray : string[] = ["","","","",""];
  constructor() { }

  ngOnInit(): void {

    this.hiraganaArray = this.shuffleArray(this.hiraganaArray);
    this.generateRound(this.hiraganaArray, this.round);

  }


  shuffleArray(array : string[]){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  generateRound(hiraganaArray:string[], round:number){
    this.romajiText = hiraganaArray[round];
    let x = 0;
    this.roundArray[0]= hiraganaArray[round];

    //generate a number[] to store already pulled numbers
    var numbers: number[] = [];
    numbers.push(round);

    for(let i = 1; i < 5; i++){
      //generate a random number and check it against numbers
      x = Math.floor(Math.random() * 45);
      while(numbers.includes(x)){
        x = Math.floor(Math.random() * 45);
      }
      //if we found a number not already used once we push it to the array
      numbers.push(x);
      this.roundArray[i] = hiraganaArray[x];
    }
    this.roundArray = this.shuffleArray(this.roundArray);
    console.log(numbers)
  }

  checkAnswer(answer : string){

    if(answer == this.romajiText){
      this.score++
      this.previousResult = "Correct"
    } else {
      this.previousResult = "Wrong"
    }

    if(this.round < 45){this.generateRound(this.hiraganaArray, ++this.round)}
    else{this.previousResult = "Final result"}

  }


}
