import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Vocab} from "../vocabs/vocabs.component";

@Injectable({
  providedIn: 'root'
})
export class VocabService {

  constructor(private http : HttpClient) { }

  getAllVocabs(){
    return this.http.get<Vocab[]>(`http://localhost:8080/japanese/vocabs/allVocabs`);
  }

  saveVocab(vocab : Vocab){
    return this.http.post(`http://localhost:8080/japanese/vocabs/createVocab`, vocab);
  }

  saveList(list : Vocab[]){
    return this.http.post(`http://localhost:8080/japanese/vocabs/saveList`, list);
  }


}
