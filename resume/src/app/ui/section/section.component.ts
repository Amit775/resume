import { Component, input } from "@angular/core";

@Component({
  standalone: true,
  selector: "resume-section",
  template: `
    <section>
      <div class="title">{{ title() }}</div>
      <div class="divider"></div>
      <ng-content></ng-content>
    </section>
  `,
  styles: `
  section { display: block; border-radius: 16px; padding: 16px; border: 0px solid black; margin: 8px; }
  ::ng-deep .skills section { margin-bottom: 0; padding-bottom: 10px; }
  ::ng-deep .last-section section { margin-bottom: 0; }
  .title { font-size: 1.5em; font-weight: bold; }
  .divider { margin: 8px 0; border-bottom: 1px solid black; }
  `,
})
export default class SectionComponent {
  title = input.required<string>();
}
