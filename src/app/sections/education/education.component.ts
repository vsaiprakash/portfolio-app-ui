import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionControllerService } from '../section-controller.service';
import { EducationService } from './education.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit, OnDestroy {

  certificatesList: any[];
  certificatesListSubscription: Subscription;
  educationData: any[];
  educationDataSubscription: Subscription;


  constructor(
    private sectionController: SectionControllerService,
    private educationService: EducationService) {
  }

  ngOnInit(): void {
    this.certificatesListSubscription = this.educationService.getCertificatesList().subscribe(res => {
      this.certificatesList = res;
    });
    this.educationDataSubscription = this.educationService.getEducationData().subscribe(res => {
      this.educationData = res;
    });
  }

  ngOnDestroy(): void {
    this.certificatesListSubscription.unsubscribe();
    this.educationDataSubscription.unsubscribe();
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
