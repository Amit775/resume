import { Component } from '@angular/core';

import { AnalogWelcomeComponent } from './analog-welcome.component';

@Component({
  selector: 'resume-home',
  standalone: true,
  imports: [AnalogWelcomeComponent],
  template: `
     <resume-analog-welcome/>
  `,
})
export default class HomeComponent {
}
