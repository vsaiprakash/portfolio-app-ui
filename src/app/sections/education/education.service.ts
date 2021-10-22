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
        return this.certificatesList$;
    }

    getEducationData(): Observable<any>{
        return this.educationData$;
    }

    setCertificatesList(certificatesList: any) {
      this.certificatesListSubject.next(certificatesList);
    }

    setEducationData(educationData: any) {
      this.educationDataSubject.next(educationData);
    }
}