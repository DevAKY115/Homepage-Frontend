import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vocab} from "../japanese/vocabs/vocabs.component";

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor(private http : HttpClient) { }

  getAllVocabs(){
    return this.http.get<Vocab[]>(`http://localhost:8080/japanese/vocabs/allVocabs`);
  }

  getVocabsByChapter(chapter:number){
    return this.http.get<Vocab[]>(`http://localhost:8080/japanese/vocabs/${chapter}`);
  }

  saveVocab(vocab : Vocab){
    return this.http.post(`http://localhost:8080/japanese/vocabs/createVocab`, vocab);
  }

  saveList(list : Vocab[]){
    return this.http.post(`http://localhost:8080/japanese/vocabs/saveList`, list);
  }

  sendFile(formData : FormData){
    return this.http.post(`http://localhost:8080/japanese/vocabs/saveList`, formData);
  }


}
