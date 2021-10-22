import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';
import { SkillsService } from '../sections/skills/skills.service';
import { PersonalProjectsService } from '../sections/personal-projects/personal-projects.service';
import { EducationService } from '../sections/education/education.service';
import { ContactMeService } from '../sections/contact-me/contact-me.service';
import { WorkExperienceService } from '../sections/work-experience/work-experience.service';

@Injectable({
  providedIn: 'root'
})
export class DataService {
  // https://restdb.io/   Free DB as RESTful API
  // apiKey: 6172afd28597142da1745916
  // Set Web Page Key with CORS enabled urls using - https://restdb.io/docs/apikeys-and-cors
  // Change CORS from https://vsaiprakash.github.io to * when testing on Gitpod or Dev
  // restdb.io free account allows only one CORS enabled entry so it is required.
  url: string = "https://portfolioapp-e438.restdb.io/rest/portfolio-app-data?max=1";
  options: any = {
    headers: {
      "Accept": "application/json",
      "Content-Type": "application/json",
      "x-apikey": "6172afd28597142da1745916"
    }
  };

  constructor(
    private http: HttpClient,
    private skillsService: SkillsService,
    private workExperienceService: WorkExperienceService,
    private personalProjectsService: PersonalProjectsService,
    private educationService: EducationService,
    private contactMeService: ContactMeService) { }

  getData() {
    // Loading all data with single DB call
    // restdb free account allows only 1 request per second 
    // ... so this is efficient to load all data quickly on page load
    this.http.get(this.url, this.options)
    .pipe(map(res => res[0].data))
    .subscribe( res => {
      if(res){
        //Load Skills Data
        this.skillsService.setPrimarySkillsList(res.skills.primarySkills);
        this.skillsService.setSecondarySkillsList(res.skills.secondarySkills);

        //Load Work Experience Data
        this.workExperienceService.setWorkExperienceList(res.workExperience);

        //Load Personal Projects Data
        this.personalProjectsService.setPersonalProjectsList(res.personalProjects);

        //Load Education Data
        this.educationService.setCertificatesList(res.education.certifications);
        this.educationService.setEducationData(res.education.educationData);

        //Load Contact Me Data
        this.contactMeService.setSocialsList(res.contactMe.socialsList);
      }
    })
  }


}
