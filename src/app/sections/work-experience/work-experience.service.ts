import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  workExperienceListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  workExperienceList$: Observable<any[]> = this.workExperienceListSubject.asObservable();

  getWorkExperienceList(): Observable<any>{
    return this.workExperienceList$;
  }

  setWorkExperienceList(workExperienceList: any[]) {
    this.workExperienceListSubject.next(workExperienceList);
  }
}