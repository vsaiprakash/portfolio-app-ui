import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';
import { HomeService } from './home.service';
import { Subscription } from 'rxjs';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  profileImagePath: String = null;
  careerObjective: String = null;

  profileImagePathSubscription: Subscription;
  careerObjectiveSubscription: Subscription;

  constructor(
    private sectionController: SectionControllerService,
    private homeService: HomeService) { }

  ngOnInit(): void {
    this.profileImagePathSubscription = this.homeService.getProfileImagePath().subscribe(
      res => this.profileImagePath = res
    );
    this.careerObjectiveSubscription = this.homeService.getCareerObjective().subscribe(
      res => this.careerObjective = res
    );
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
