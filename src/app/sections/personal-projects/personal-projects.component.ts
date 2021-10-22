import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionControllerService } from '../section-controller.service';
import { PersonalProjectsService } from './personal-projects.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit, OnDestroy {

  personalProjectsList: any[];
  personalProjectsListSubscription: Subscription;

  constructor(
    private sectionController: SectionControllerService,
    private personalProjectsService: PersonalProjectsService) {
  }

  ngOnInit(): void {
    this.personalProjectsListSubscription = this.personalProjectsService.getPersonalProjectsList().subscribe(res => {
      this.personalProjectsList = res;
    });
  }

  ngOnDestroy(): void {
    this.personalProjectsListSubscription.unsubscribe();
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
