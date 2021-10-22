import { Component, OnDestroy, OnInit } from '@angular/core';
import { Observable, Subscription } from 'rxjs';
import { SectionControllerService } from '../section-controller.service';
import { WorkExperienceService } from './work-experience.service';

@Component({
  selector: 'app-work-experience',
  templateUrl: './work-experience.component.html',
  styleUrls: ['./work-experience.component.css']
})

export class WorkExperienceComponent implements OnInit, OnDestroy {

  workExperienceList: any[];
  workExperienceListSubscription: Subscription;

  constructor(
    private sectionController: SectionControllerService,
    private workExpService: WorkExperienceService) {
  }

  ngOnInit(): void {
    this.workExperienceListSubscription = this.workExpService.getWorkExperienceList().subscribe(res => {
      this.workExperienceList = res;
    });
  }

  ngOnDestroy(): void {
    this.workExperienceListSubscription.unsubscribe();
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }
}
