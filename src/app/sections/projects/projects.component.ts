import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-projects',
  templateUrl: './projects.component.html',
  styleUrls: ['./projects.component.css']
})
export class ProjectsComponent implements OnInit {

  constructor(private sectionController: SectionControllerService) { }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
