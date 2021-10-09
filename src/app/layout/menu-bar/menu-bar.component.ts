import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from './../../sections/section-controller.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private sectionController: SectionControllerService) { }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

  goToHomeSection(){
    this.sectionController.updateSection(1);
  }

  goToSkillsSection(){
    this.sectionController.updateSection(2);
  }

  goToWorkExperienceSection(){
    this.sectionController.updateSection(3);
  }

  goToPersonalProjectsSection(){
    this.sectionController.updateSection(4);
  }

  goToEducationSection(){
    this.sectionController.updateSection(5);
  }

  goToContactMeSection(){
    this.sectionController.updateSection(6);
  }
}
