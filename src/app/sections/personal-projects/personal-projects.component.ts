import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-personal-projects',
  templateUrl: './personal-projects.component.html',
  styleUrls: ['./personal-projects.component.css']
})
export class PersonalProjectsComponent implements OnInit {

  personalProjectsList: any[];

  constructor(private sectionController: SectionControllerService) {
    this.personalProjectsList = [
      {
        title: "Game Box App",
        img: "assets/images/project-screenshots/gamebox-screenshot.png",
        sourcecode: "https://github.com/vsaiprakash/gamebox-app-ui",
        demo: "http://vsaiprakash.github.io/gamebox-app-ui"
      },
      {
        title: "Portfolio App",
        img: "assets/images/project-screenshots/portfolio-screenshot.png",
        sourcecode: "https://github.com/vsaiprakash/portfolio-app-ui",
        demo: "http://vsaiprakash.github.io/portfolio-app-ui"
      }
    ]
  }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
