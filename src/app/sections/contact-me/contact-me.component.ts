import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  socialsList: any[];

  constructor(private sectionController: SectionControllerService) {
    this.socialsList = [
      { title: "Github", img: "assets/images/socials/github-logo.svg", link: "https://github.com/vsaiprakash" },
      { title: "LinkedIn", img: "assets/images/socials/linkedin-logo.svg", link: "https://www.linkedin.com/in/vsaiprakash" },
      { title: "Instagram", img: "assets/images/socials/instagram-logo.svg", link: "https://www.instagram.com/specteller" }
    ]
  }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }
}
