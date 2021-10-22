import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class EducationService {

    certificatesListSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);
    educationDataSubject: BehaviorSubject<any[]> = new BehaviorSubject<any[]>(null);

    certificatesList$: Observable<any[]> = this.certificatesListSubject.asObservable();
    educationData$: Observable<any[]> = this.educationDataSubject.asObservable();

    getCertificatesList(): Observable<any>{
        const certificatesList = [
            {
              title: "Front-End JavaScript Frameworks: Angular from Coursera",
              link: "https://www.coursera.org/account/accomplishments/verify/M7K6GL2KVUVN"
            },
            {
              title: "Front-End Web UI Frameworks and Tools: Bootstrap 4 Coursera",
              link: "https://www.coursera.org/account/accomplishments/verify/5RDC8479FHXT"
            },
            {
              title: "Reactive Angular Course (with RxJs)  from Udemy",
              link: "https://www.udemy.com/certificate/UC-acb6ebb9-af8c-457e-80cb-d5f5a3a26184/"
            },
            {
              title: "Angular Testing Masterclass from Udemy",
              link: "https://www.udemy.com/certificate/UC-352eb2ea-4443-4b0d-a6f5-5dd728779bcc/"
            }
        ];

        this.certificatesListSubject.next(certificatesList);
        return this.certificatesList$;
    }

    getEducationData(): Observable<any>{
        const educationData = [
            {
              course: "BTech (IT)",
              institute: "CVR College of Engineering, Hyderabad",
              percentage: 0.83
            },
            {
              course: "XII",
              institute: "Sri Chaitanya, Vijayawada",
              percentage: 0.91
            },
            {
              course: "X",
              institute: "CSI English Medium High School, Eluru Andhra Pradesh",
              percentage: 0.75
            }
        ];

        this.educationDataSubject.next(educationData);
        return this.educationData$;
    }
}