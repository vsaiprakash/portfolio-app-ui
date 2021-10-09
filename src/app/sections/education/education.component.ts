import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  constructor(private sectionController: SectionControllerService) { }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
