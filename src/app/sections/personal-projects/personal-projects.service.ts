import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PersonalProjectsService {

    personalProjectsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    personalProjectsList$: Observable<any[]> = this.personalProjectsListSubject.asObservable();

    getPersonalProjectsList(): Observable<any>{
        const personalProjectsList = [
            {
              title: "Game Box App",
              img: "assets/images/project-screenshots/gamebox-screenshot.png",
              sourcecode: "https://github.com/vsaiprakash/gamebox-app-ui",
              demo: "http://vsaiprakash.github.io/gamebox-app-ui"
            },
            {
              title: "Portfolio App",
              img: "assets/images/project-screenshots/portfolio-screenshot.png",
              sourcecode: "https://github.com/vsaiprakash/portfolio-app-ui",
              demo: "http://vsaiprakash.github.io/portfolio-app-ui"
            }
        ];

        this.personalProjectsListSubject.next(personalProjectsList);
        return this.personalProjectsList$;
    }

    setPersonalProjectsList(personalProjectsList: any[]) {
      this.personalProjectsListSubject.next(personalProjectsList);
    }
}