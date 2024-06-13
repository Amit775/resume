import { Component, inject } from "@angular/core";
import { MatIconRegistry } from "@angular/material/icon";
import { DomSanitizer } from "@angular/platform-browser";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "resume-root",
  standalone: true,
  imports: [RouterOutlet],
  template: ` <router-outlet></router-outlet> `,
})
export class AppComponent {
  #sanitizer = inject(DomSanitizer);
  #icon = inject(MatIconRegistry).addSvgIcon(
    "github",
    this.#sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/assets/github-mark.svg")
  ).addSvgIcon(
	"linkedin",
	this.#sanitizer.bypassSecurityTrustResourceUrl("http://localhost:4200/assets/linkedin.svg")
  );
}
