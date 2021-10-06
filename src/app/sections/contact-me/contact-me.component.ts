import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  constructor(private sectionController: SectionControllerService) { }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }
}
