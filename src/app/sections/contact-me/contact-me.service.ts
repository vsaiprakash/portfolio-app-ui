import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

    socialsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    socialsList$: Observable<any[]> = this.socialsListSubject.asObservable();

    hobbiesListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    hobbiesList$: Observable<any[]> = this.hobbiesListSubject.asObservable();

    getSocialsList(): Observable<any>{
        return this.socialsList$;
    }

    setSocialsList(socialsList: any[]) {
        this.socialsListSubject.next(socialsList);
    }
    
    getHobbiesList(): Observable<any>{
        return this.hobbiesList$;
    }

    setHobbiesList(hobbiesList: any[]) {
        this.hobbiesListSubject.next(hobbiesList);
    }
}