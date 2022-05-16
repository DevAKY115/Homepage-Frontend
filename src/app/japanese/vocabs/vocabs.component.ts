import { Component, OnInit } from '@angular/core';
import {VocabService} from "../../service/vocab.service";
import {ActivatedRoute} from "@angular/router";
import { createPopper } from '@popperjs/core';

export class Vocab {

  constructor(public japanese : string, public translations : string[]) {
  }
}

@Component({
  selector: 'app-vocabs',
  templateUrl: './vocabs.component.html',
  styleUrls: ['./vocabs.component.css']
})
export class VocabsComponent implements OnInit {

  currentChapter : number = this.aRoute.snapshot.params['chapter'];
  dataAvailable : boolean = false;
  checkedVocab : boolean | undefined;
  translatedText :string = "";
  result : string = "";

  vocabList!: Vocab[];
  currentVocab!: Vocab;
  counter : number = 0;
  filePath : string = "";
  file! : File;

  constructor(private vocabService : VocabService, private aRoute:ActivatedRoute) {
  }

  ngOnInit(): void {
    if(this.currentChapter == undefined){
      this.currentChapter = 1;
    }
    this.vocabService.getVocabsByChapter(this.currentChapter).subscribe(
      response => {
        this.vocabList = response;
        this.vocabList = this.shuffleArray(this.vocabList);

        this.currentVocab = this.vocabList[this.counter];
        this.dataAvailable = true;
      }
    )
  }



  checkTranslation(){

    this.checkedVocab = false;

    for(let t of this.currentVocab.translations){
      if(t.toLowerCase() == this.translatedText.toLowerCase()){
        this.checkedVocab = true;
        break;
      }
    }


    if(this.checkedVocab){
      this.result = "Correct"
      return;
    } else {
      this.result = "Wrong, the correct translations are: " + this.currentVocab.translations
    }
  }

  next(){
    this.checkedVocab = undefined;
    this.result = "";
    this.translatedText = "";
    if(this.counter < this.vocabList.length - 1) {
      this.counter++;
    }
    // @ts-ignore
    this.currentVocab = this.vocabList[this.counter]
  }

  addTranslation(){
    this.currentVocab.translations.push(this.translatedText);
    this.vocabService.saveVocab(this.currentVocab).subscribe(
      repsonse => {
        console.log(repsonse);
      }
    )
  }

  shuffleArray(array : Vocab[]){
    for (let i = array.length - 1; i > 0; i--) {
      const j = Math.floor(Math.random() * (i + 1));
      const temp = array[i];
      array[i] = array[j];
      array[j] = temp;
    }
    return array;
  }

  saveList(event: any){

    this.file = event.target.files[0];

    const formData = new FormData();
    formData.append("file", this.file, this.file.name);

    this.vocabService.sendFile(formData).subscribe(
      response => {
        console.log(response);
      }
    )

  }


}
