import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-menu-bar',
  templateUrl: './menu-bar.component.html',
  styleUrls: ['./menu-bar.component.css']
})
export class MenuBarComponent implements OnInit {

  constructor(private sectionController: SectionControllerService) { }

  ngOnInit(): void {
  }

  goToHomeSection(){
    this.sectionController.updateSection(0);
  }

  goToSkillsSection(){
    this.sectionController.updateSection(1);
  }

  goToProjectsSection(){
    this.sectionController.updateSection(2);
  }

  goToContactMeSection(){
    this.sectionController.updateSection(3);
  }
}
