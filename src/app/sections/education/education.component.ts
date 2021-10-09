import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-education',
  templateUrl: './education.component.html',
  styleUrls: ['./education.component.css']
})
export class EducationComponent implements OnInit {

  certificatesList: any[];
  educationData: any[];

  constructor(private sectionController: SectionControllerService) {
    this.certificatesList = [
      {
        title: "Front-End JavaScript Frameworks: Angular from Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/M7K6GL2KVUVN"
      },
      {
        title: "Front-End Web UI Frameworks and Tools: Bootstrap 4 Coursera",
        link: "https://www.coursera.org/account/accomplishments/verify/5RDC8479FHXT"
      },
      {
        title: "Reactive Angular Course (with RxJs)  from Udemy",
        link: "https://www.udemy.com/certificate/UC-acb6ebb9-af8c-457e-80cb-d5f5a3a26184/"
      },
      {
        title: "Angular Testing Masterclass from Udemy",
        link: "https://www.udemy.com/certificate/UC-352eb2ea-4443-4b0d-a6f5-5dd728779bcc/"
      }
    ];

    this.educationData = [
      {
        course: "BTech (IT)",
        institute: "CVR College of Engineering, Hyderabad",
        percentage: 0.83
      },
      {
        course: "XII",
        institute: "Sri Chaitanya, Vijayawada",
        percentage: 0.91
      },
      {
        course: "X",
        institute: "CSI English Medium High School, Eluru Andhra Pradesh",
        percentage: 0.75
      }
    ];
  }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
