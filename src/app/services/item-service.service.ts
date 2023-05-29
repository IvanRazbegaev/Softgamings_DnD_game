import { Injectable } from '@angular/core';
import {HttpClient} from "@angular/common/http";
import {Observable} from "rxjs";

@Injectable({
  providedIn: 'root'
})
export class ItemServiceService {

  constructor(private http: HttpClient) { }

  getCharacterClassItems(characterClass: string): Observable<any>{
    return this.http.get(`http://localhost:8080/character/items?characterClass=${characterClass}`)
  }

  getWeapons(weaponSubtype: string): Observable<any>{
    return this.http.get(`http://localhost:8080/weapons?weaponSubtype=${weaponSubtype}`)
  }
}
