import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ContactMeService {

    socialsListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    socialsList$: Observable<any[]> = this.socialsListSubject.asObservable();

    getSocialsList(): Observable<any>{
        // const socialsList = [
        //     { title: "Github", img: "assets/images/socials/github-logo.svg", link: "https://github.com/vsaiprakash" },
        //     { title: "LinkedIn", img: "assets/images/socials/linkedin-logo.svg", link: "https://www.linkedin.com/in/vsaiprakash" },
        //     { title: "HackerRank", img: "assets/images/socials/hackerrank-logo.svg", link: "https://www.hackerrank.com/vukkumsp" },
        //     { title: "Instagram", img: "assets/images/socials/instagram-logo.svg", link: "https://www.instagram.com/specteller" }
        // ];

        // this.socialsListSubject.next(socialsList);
        return this.socialsList$;
    }

    setSocialsList(socialsList: any[]) {
        this.socialsListSubject.next(socialsList);
    }
}