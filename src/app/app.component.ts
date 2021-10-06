import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'portfolio-app-ui';

  scrollToSectionId(sectionId: string): void {
    let elmnt = document.getElementById(sectionId);
    elmnt.scrollIntoView();
  }
}
