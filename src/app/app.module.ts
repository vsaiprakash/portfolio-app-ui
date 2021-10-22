import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { MenuBarComponent } from './layout/menu-bar/menu-bar.component';
import { HomeComponent } from './sections/home/home.component';
import { SkillsComponent } from './sections/skills/skills.component';
import { PersonalProjectsComponent } from './sections/personal-projects/personal-projects.component';
import { ContactMeComponent } from './sections/contact-me/contact-me.component';
import { WorkExperienceComponent } from './sections/work-experience/work-experience.component';
import { EducationComponent } from './sections/education/education.component';
import { FooterComponent } from './layout/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    MenuBarComponent,
    HomeComponent,
    SkillsComponent,
    PersonalProjectsComponent,
    ContactMeComponent,
    WorkExperienceComponent,
    EducationComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    NgbModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
