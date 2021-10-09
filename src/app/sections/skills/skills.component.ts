import { Component, OnInit } from '@angular/core';
import { SectionControllerService } from '../section-controller.service';

@Component({
  selector: 'app-skills',
  templateUrl: './skills.component.html',
  styleUrls: ['./skills.component.css']
})
export class SkillsComponent implements OnInit {

  primarySkillsList: any[];
  secondarySkillsList: any[];

  constructor(private sectionController: SectionControllerService) {
    this.primarySkillsList = [
      { title: "Angular", img: "assets/images/skills/angular-logo.svg" },
      { title: "NodeJs", img: "assets/images/skills/nodejs-logo.svg" },
      { title: "ExpressJs", img: "assets/images/skills/expressjs-logo.svg" },
      { title: "AWS", img: "assets/images/skills/aws-logo.svg" },
      { title: "Bootstrap", img: "assets/images/skills/bootstrap-logo.svg" },
      { title: "Javascript", img: "assets/images/skills/javascript-logo.svg" },
      { title: "JQuery", img: "assets/images/skills/jquery-logo.svg" },

      // { title: "Insomnia", img: "assets/images/skills/insomnia-logo.svg" }
    ];

    this.secondarySkillsList = [
      { title: "Core Java", img: "assets/images/skills/java-logo.svg" },
      { title: "Maven", img: "assets/images/skills/maven-logo.svg" },
      { title: "RDBMS", img: "assets/images/skills/rdbms-logo.svg" },
      { title: "SpringBoot", img: "assets/images/skills/springboot-logo.svg" },
      { title: "Firebase", img: "assets/images/skills/firebase-logo.svg" },
      { title: "Postman", img: "assets/images/skills/postman-logo.svg" },
      { title: "Git", img: "assets/images/skills/git-logo.svg" },
      { title: "NPM", img: "assets/images/skills/npm-logo.svg" },
      { title: "RabbitMQ", img: "assets/images/skills/rabbitmq-logo.svg" },
      { title: "HTML", img: "assets/images/skills/html5-logo.svg" },
      { title: "CSS", img: "assets/images/skills/css3-logo.svg" },
      { title: "Less", img: "assets/images/skills/less-logo.svg" },
      { title: "Serverless", img: "assets/images/skills/serverless-logo.svg" },
    ];
  }

  ngOnInit(): void {
  }

  goToHeaderSection(){
    this.sectionController.updateSection(0);
  }

}
