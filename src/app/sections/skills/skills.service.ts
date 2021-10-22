import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SkillsService {

    primarySkillsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    secondarySkillsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

    primarySkillsList$: Observable<any[]> = this.primarySkillsListSubject.asObservable();
    secondarySkillsList$: Observable<any[]> = this.secondarySkillsListSubject.asObservable();

    getPrimarySkillsList(): Observable<any>{
        return this.primarySkillsList$;
    }

    getSecondarySkillsList(): Observable<any>{
        return this.secondarySkillsList$;
    }

    setPrimarySkillsList(primarySkillsList: any[]){
        this.primarySkillsListSubject.next(primarySkillsList);
    }

    setSecondarySkillsList(secondarySkillsList: any[]){
        this.secondarySkillsListSubject.next(secondarySkillsList);
    }
}