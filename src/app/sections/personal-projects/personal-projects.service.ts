import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {

    personalProjectsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    personalProjectsList$: Observable<any[]> = this.personalProjectsListSubject.asObservable();

    getPersonalProjectsList(): Observable<any>{
        return this.personalProjectsList$;
    }

    setPersonalProjectsList(personalProjectsList: any[]) {
      this.personalProjectsListSubject.next(personalProjectsList);
    }
}