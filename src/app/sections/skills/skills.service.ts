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
        const primarySkillsList = [
            { title: "Angular", img: "assets/images/skills/angular-logo.svg" },
            { title: "NodeJs", img: "assets/images/skills/nodejs-logo.svg" },
            { title: "ExpressJs", img: "assets/images/skills/expressjs-logo.svg" },
            { title: "AWS", img: "assets/images/skills/aws-logo.svg" },
            { title: "Bootstrap", img: "assets/images/skills/bootstrap-logo.svg" },
            { title: "Javascript", img: "assets/images/skills/javascript-logo.svg" },
            { title: "JQuery", img: "assets/images/skills/jquery-logo.svg" },
      
            // { title: "Insomnia", img: "assets/images/skills/insomnia-logo.svg" }
        ];

        this.primarySkillsListSubject.next(primarySkillsList);
        return this.primarySkillsList$;
    }

    getSecondarySkillsList(): Observable<any>{
        const secondarySkillsList = [
            { title: "Core Java", img: "assets/images/skills/java-logo.svg" },
            { title: "Maven", img: "assets/images/skills/maven-logo.svg" },
            { title: "RDBMS", img: "assets/images/skills/rdbms-logo.svg" },
            { title: "SpringBoot", img: "assets/images/skills/springboot-logo.svg" },
            { title: "Firebase", img: "assets/images/skills/firebase-logo.svg" },
            { title: "Postman", img: "assets/images/skills/postman-logo.svg" },
            { title: "Git", img: "assets/images/skills/git-logo.svg" },
            { title: "NPM", img: "assets/images/skills/npm-logo.svg" },
            { title: "RabbitMQ", img: "assets/images/skills/rabbitmq-logo.svg" },
            { title: "HTML", img: "assets/images/skills/html5-logo.svg" },
            { title: "CSS", img: "assets/images/skills/css3-logo.svg" },
            { title: "Sass", img: "assets/images/skills/sass-logo.svg" },
            { title: "Serverless", img: "assets/images/skills/serverless-logo.svg" },
        ];

        this.secondarySkillsListSubject.next(secondarySkillsList);
        return this.secondarySkillsList$;
    }

    setPrimarySkillsList(primarySkillsList: any[]){
        this.primarySkillsListSubject.next(primarySkillsList);
    }

    setSecondarySkillsList(secondarySkillsList: any[]){
        this.secondarySkillsListSubject.next(secondarySkillsList);
    }
}