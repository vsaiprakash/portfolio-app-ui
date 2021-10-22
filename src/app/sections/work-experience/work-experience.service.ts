import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class WorkExperienceService {
  workExperienceListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
  workExperienceList$: Observable<any[]> = this.workExperienceListSubject.asObservable();

  getWorkExperienceList(): Observable<any>{
    // const workExperienceList = [
    //   {
    //     company: "Infosys Pvt Ltd",
    //     role: "Technology Analyst",
    //     duration: "3.5 years",
    //     projects: [
    //       {
    //         title: "Middleware Project with Spring Boot Micro services",
    //         role: "Backend Developer",
    //         skills: [
    //           "Spring Boot Micro services",
    //           "Git",
    //           "PCF Web Services",
    //           "Postman",
    //           "Maven",
    //           "STS",
    //           "RabbitMQ"
    //         ],
    //         duration: "1.5 years",
    //         description: [
    //           "It is a Middleware Project which modifies/simplifies/manages huge loads of data obtained from one end and passes to Endpoints.  In case of any loss of data, we will replay with the help of stored data at Middleware level.",
    //           "Worked on implementing new features in Micro services.",
    //           "Worked in finding and fixing bugs on Micro services."
    //         ]
    //       },
    //       {
    //         title: "Angular UI Project",
    //         role: "Frontend Developer",
    //         skills: [
    //           "Angular 4",
    //           "Bootstrap",
    //           "Visual Studio Code",
    //           "HTML",
    //           "CSS",
    //           "Javascript",
    //           "Git"
    //         ],
    //         duration: "6 months",
    //         description: [
    //           "An online ecommerce  site for selling food items.",
    //           "Built an Angular SPA as per given requirements."
    //         ]
    //       },
    //       {
    //         title: "Infosys Health Portal -  Client API Tester, Searching Drugs and Coverage",
    //         role: "Frontend Developer",
    //         skills: [
    //           "Angular 4+",
    //           "Bootstrap",
    //           "Angular Material",
    //           "Visual Studio Code",
    //           "HTML",
    //           "CSS",
    //           "Javascript",
    //           "Git"
    //         ],
    //         duration: "9 months",
    //         description: [
    //           "Built a Client API Tester for customers to showcase how Health Portal API works.",
    //           "Worked on Improving Searching Drugs and Coverage Plans Portal App using Angular Material."
    //         ]
    //       },
    //       {
    //         title: "Cummins API Portal",
    //         role: "Fullstack Developer",
    //         skills: [
    //           "Angular 4+",
    //           "Bootstrap",
    //           "Angular Material",
    //           "NodeJs",
    //           "Visual Studio Code",
    //           "AWS Serverless",
    //           "HTML",
    //           "CSS",
    //           "Javascript",
    //           "Git"
    //         ],
    //         duration: "5 months",
    //         description: [
    //           "Built an AWS Lambda in Java for Client SDK Download feature using Swagger Library",
    //           "Build AWS Lambda POCs using NodeJS ",
    //           "Worked on improving the Frontend performance using “Optimistic Updates” ",
    //           "Built Code Snippet functionality at frontend using Postman Library"
    //         ]
    //       }
    //     ]
    //   },
    //   {
    //     company: "MResult Services Pvt Ltd",
    //     role: "Backend Developer",
    //     duration: "Currently working",
    //     projects: [
    //       {
    //         title: "Marsh McLennan Portal",
    //         role: "Frontend Developer",
    //         skills: [
    //           "Angular 10"
    //         ],
    //         duration: "Currently working",
    //         description: [
    //           "Working as a Frontend Developer."
    //         ]
    //       }
    //     ]
    //   }
    // ]

    // this.workExperienceListSubject.next(workExperienceList);
    return this.workExperienceList$;
  }

  setWorkExperienceList(workExperienceList: any[]) {
    this.workExperienceListSubject.next(workExperienceList);
  }
}