import { Component, computed, input } from "@angular/core";
import { MatIconModule } from "@angular/material/icon";

export type Contact = {
  email: string;
  location: string;
  github: string;
  linkedin: string;
};

@Component({
  selector: "resume-contact",
  standalone: true,
  imports: [MatIconModule],
  template: `
    <span class="contact">
      @for (key of keys(); track key) {
      <span class="info" [class.clickable]="isExternal(key)" (click)="handleClick(key)">
        @if (isExternal(key)) {
        <mat-icon class="icon {{ key }}" [svgIcon]="getExternal(key)"></mat-icon>
        } @else {
        <mat-icon class="icon">{{ icons[key] }}</mat-icon>
        }
        <span class="value">{{ contact()[key] }}</span>
      </span>
      }
    </span>
  `,
  styles: `
    .contact { display: flex; flex-direction: column; justify-content: space-between;}
	.info { display: flex; flex-direction: row; align-items: center; margin: 4px 0;}
	.clickable { cursor: pointer; }
	.icon { margin-right: 8px; }
	::ng-deep .icon.github path { transform: scale(0.2) translate(10px, 10px); }
	.value { font-size: 16px; }
  `,
})
export default class ContactComponent {
  contact = input.required<Contact>();
  keys = computed<(keyof Contact)[]>(
    () => Object.keys(this.contact()) as unknown as (keyof Contact)[]
  );

  icons: Record<keyof Contact, string | { external: string }> = {
    email: "email",
    location: "location_on",
    github: { external: "github" },
    linkedin: { external: "linkedin" },
  };

  isExternal(key: keyof Contact): boolean {
    return typeof this.icons[key] === "object";
  }

  getExternal(key: keyof Contact): string {
    return (this.icons[key] as { external: string }).external;
  }

  handleClick(key: keyof Contact): void {
    if (!this.isExternal(key)) return;

    console.log(this.contact()[key]);
    window.open(`https://${this.contact()[key]}`, "_blank");
  }
}
