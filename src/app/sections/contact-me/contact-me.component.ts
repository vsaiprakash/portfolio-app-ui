import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionControllerService } from '../section-controller.service';
import { ContactMeService } from './contact-me.service';

@Component({
  selector: 'app-contact-me',
  templateUrl: './contact-me.component.html',
  styleUrls: ['./contact-me.component.css']
})
export class ContactMeComponent implements OnInit, OnDestroy {

  socialsList: any[];
  socialsListSubscription: Subscription;

  constructor(
    private sectionController: SectionControllerService,
    private contactMeService: ContactMeService) {
  }

  ngOnInit(): void {
    this.socialsListSubscription = this.contactMeService.getSocialsList().subscribe(res => {
      this.socialsList = res;
    });
  }

  ngOnDestroy(): void {
    this.socialsListSubscription.unsubscribe();
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }
}
