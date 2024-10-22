import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class HomeService {
    profileImagePathSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    profileImagePath$: Observable<string> = this.profileImagePathSubject.asObservable();

    careerObjectiveSubject: BehaviorSubject<string> = new BehaviorSubject<string>(null);
    careerObjective$: Observable<string> = this.careerObjectiveSubject.asObservable();

    getProfileImagePath(): Observable<string>{
        return this.profileImagePath$;
    }

    setProfileImagePath(profileImagePath: string) {
      this.profileImagePathSubject.next(profileImagePath);
    }

    getCareerObjective(): Observable<string>{
        return this.careerObjective$;
    }

    setCareerObjective(careerObjective: string) {
      this.careerObjectiveSubject.next(careerObjective);
    }

}