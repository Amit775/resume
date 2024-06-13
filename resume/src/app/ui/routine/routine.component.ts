import { Component, input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

@Component({
  selector: "resume-routine",
  standalone: true,
  imports: [MatIconModule],
  template: `
    <span class="routine">
      @for (stage of stages(); track stage; let last = $last) {
      <span class="stage">{{ stage }}</span>
      @if (!last) {
      <mat-icon class="icon">arrow_right_alt</mat-icon>
      } }
    </span>
  `,
  styles: `
	.routine { font-size: 1.2em; display: flex; flex-direction: row; align-items: center; }
	.stage { margin: 0 4px; }
	`,
})
export default class RoutineComponent {
  stages = input.required<string[]>();
  seperator = input<string>("-");
}
