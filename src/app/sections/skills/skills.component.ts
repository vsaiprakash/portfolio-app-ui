import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  skillsList: any[];
  skillsList4x: any[];
  skillsList2x: any[];

  constructor(private sectionController: SectionControllerService) {
    this.skillsList = [
      { title: "Angular", img: "assets/images/skills/angular-logo.svg" },
      { title: "NodeJs", img: "assets/images/skills/nodejs-logo.svg" },
      { title: "ExpressJs", img: "assets/images/skills/expressjs-logo.svg" },
      { title: "Java", img: "assets/images/skills/java-logo.svg" },
      { title: "AWS", img: "assets/images/skills/aws-logo.svg" },
      { title: "Firebase", img: "assets/images/skills/firebase-logo.svg" },
      { title: "Postman", img: "assets/images/skills/postman-logo.svg" },
      // { title: "Insomnia", img: "assets/images/skills/insomnia-logo.svg" }
    ];
    // let row4x = [];
    // let row2x = [];
    // let counter2x = 0;
    // let counter4x = 0;
    
    // this.skillsList.forEach(skill => {

    //   if(counter2x==2){
    //     //reset the counter
    //     counter2x = 0;
    //     //assign the row to skillList2x
    //     this.skillsList2x.push(row2x);
    //     //reset row
    //     row2x = [];
    //   }

    //   if(counter4x==4){
    //     //reset the counter
    //     counter4x = 0;
    //     //assign the row to skillList4x
    //     this.skillsList4x.push(row4x);
    //     //reset row
    //     row4x = [];
    //   }

    //   //build skillsList2x
    //   row2x.push(skill);
    //   counter2x++;

    //   //build skillsList4x
    //   row4x.push(skill);
    //   counter4x++;

    // });
  }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
