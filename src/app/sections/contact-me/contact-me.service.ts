import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

    socialsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    socialsList$: Observable<any[]> = this.socialsListSubject.asObservable();

    getSocialsList(): Observable<any>{
        return this.socialsList$;
    }

    setSocialsList(socialsList: any[]) {
        this.socialsListSubject.next(socialsList);
    }
}