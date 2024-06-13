import { Component, input } from "@angular/core";

@Component({
  selector: "resume-milestone",
  standalone: true,
  template: `
    <div class="milestone">
      <div class="header">
        <span class="column">
          <span>{{ title() }}</span>
          @if (subtitle()) {
          <span class="subtitle"> {{ subtitle() }} </span>
          }
        </span>
        <span>{{ timeline() }}</span>
      </div>
      <ul>
        @for (element of elements(); track element) {
        <li>{{ element }}</li>
        }
      </ul>
    </div>
  `,
  styles: `
	.milestone { margin: 16px 0; }
	::ng-deep .skills .milestone { margin-bottom: 0; }
	// ::ng-deep .last-milestone .milestone { margin-bottom: 0; }
	::ng-deep .last-section .last-milestone .milestone { margin-bottom: 11px; }
	.column { display: flex; flex-direction: column; }
	.header { display: flex; justify-content: space-between; }
	.subtitle { font-size: 0.8em; opacity: 0.8; }
	ul { margin: 4px 0 0 16px; }
	li { margin: 4px 0; }
  `,
})
export default class MilestoneComponent {
  title = input.required<string>();
  subtitle = input<string>();
  elements = input.required({
    transform: (value: string | string[]) =>
      Array.isArray(value) ? value : value.split(", "),
  });
  timeline = input<string>("");
}
