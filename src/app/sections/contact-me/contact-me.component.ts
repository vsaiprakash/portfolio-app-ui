import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';
import { ContactMeService } from './contact-me.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit {

  socialsList: any[];

  constructor(
    private sectionController: SectionControllerService,
    private contactMeService: ContactMeService) {
    // this.socialsList = [
    //   { title: "Github", img: "assets/images/socials/github-logo.svg", link: "https://github.com/vsaiprakash" },
    //   { title: "LinkedIn", img: "assets/images/socials/linkedin-logo.svg", link: "https://www.linkedin.com/in/vsaiprakash" },
    //   { title: "HackerRank", img: "assets/images/socials/hackerrank-logo.svg", link: "https://www.hackerrank.com/vukkumsp" },
    //   { title: "Instagram", img: "assets/images/socials/instagram-logo.svg", link: "https://www.instagram.com/specteller" }
    // ]
  }

  ngOnInit(): void {
    this.contactMeService.getSocialsList().subscribe(res => {
      this.socialsList = res;
    });
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }
}
