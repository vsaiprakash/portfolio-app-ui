import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class SectionControllerService {

  selectedSection: BehaviorSubject<string>;
  $selectedSection: Observable<string>;
  sections: string[];

  constructor() {
    this.sections = [
      "header",
      "home",
      "skills",
      "projects",
      "contact-me"
    ]
    this.selectedSection = new BehaviorSubject<string>(this.sections[0]);
    this.$selectedSection = this.selectedSection.asObservable();
  }

  updateSection(sectionIndex: number): void{
    this.selectedSection.next(this.sections[sectionIndex]);
  }

  resetSection(): void{
    this.selectedSection.next(this.sections[0]);
  }

  getSection(): Observable<string>{
    return this.$selectedSection;
  }

}
