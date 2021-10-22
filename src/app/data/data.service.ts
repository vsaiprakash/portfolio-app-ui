import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { SkillsService } from '../sections/skills/skills.service';
import { PersonalProjectsService } from '../sections/personal-projects/personal-projects.service';
import { EducationService } from '../sections/education/education.service';
import { ContactMeService } from '../sections/contact-me/contact-me.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // https://restdb.io/   Free DB as RESTful API
  url: string = "";
  options: any = {

  };

  constructor(
    private http: HttpClient,
    private skillsService: SkillsService,
    private personalProjectsService: PersonalProjectsService,
    private educationService: EducationService,
    private contactMeService: ContactMeService) { }

  getData() {
    this.http.get(this.url, this.options).subscribe( res => {

      //Load Skills Data
      this.skillsService.setPrimarySkillsList(null);
      this.skillsService.setSecondarySkillsList(null);

      //Load Personal Projects Data
      this.personalProjectsService.setPersonalProjectsList(null);

      //Load Education Data
      this.educationService.setCertificatesList(null);
      this.educationService.setEducationData(null);

      //Load Contact Me Data
      this.contactMeService.setSocialsList(null);

    })
  }


}
