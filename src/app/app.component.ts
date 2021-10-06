import { Component, OnDestroy, OnInit } from '@angular/core';
import { Subscription } from 'rxjs';
import { SectionControllerService } from './sections/section-controller.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit, OnDestroy {

  title = 'portfolio-app-ui';
  sectionControllerSubscription: Subscription;

  constructor(private sectionController: SectionControllerService){

  }

  ngOnInit(){
    this.sectionControllerSubscription = this.sectionController.$selectedSection.subscribe(sectionSelected => {
      this.scrollToSectionId(sectionSelected);
    });
  }

  ngOnDestroy(){
    this.sectionControllerSubscription.unsubscribe();
  }

  scrollToSectionId(sectionId: string): void {
    let sectionElement = document.getElementById(sectionId);
    // sectionElement.scrollIntoView();
    // sectionElement.scrollIntoView({ behavior: 'smooth' });
    sectionElement.scrollIntoView({ behavior: "smooth", block: "start" });
  }
}
