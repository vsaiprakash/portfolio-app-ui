import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionControllerService } from '../section-controller.service';
import { SkillsService } from './skills.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit, OnDestroy {

  primarySkillsList: any[];
  primarySkillsListSubscription: Subscription;
  secondarySkillsList: any[];
  secondarySkillsListSubscription: Subscription;

  constructor(
    private sectionController: SectionControllerService,
    private skillsService: SkillsService) {
  }

  ngOnInit(): void {
    this.primarySkillsListSubscription = this.skillsService.getPrimarySkillsList().subscribe(res => {
      this.primarySkillsList = res;
    });
    this.secondarySkillsListSubscription = this.skillsService.getSecondarySkillsList().subscribe(res => {
      this.secondarySkillsList = res;
    });
  }

  ngOnDestroy(): void {
    this.primarySkillsListSubscription.unsubscribe();
    this.secondarySkillsListSubscription.unsubscribe();
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
