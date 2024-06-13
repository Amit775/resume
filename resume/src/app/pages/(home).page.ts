import { Component } from "@angular/core";

import ContactComponent from "../ui/contact/contact.component";
import MilestoneComponent from "../ui/milestone/milestone.component";
import RoutineComponent from "../ui/routine/routine.component";
import SectionComponent from "../ui/section/section.component";

@Component({
  standalone: true,
  selector: "resume-home",
  host: { class: "page" },
  imports: [
    SectionComponent,
    MilestoneComponent,
    RoutineComponent,
    ContactComponent,
  ],
  template: `
    <div class="home">
      <resume-section [title]="data.name" id="title">
        <resume-routine [stages]="data.routine" />
      </resume-section>
      <div class="main">
        <div class="info">
          <resume-section title="Contact">
            <resume-contact [contact]="data.contact" />
          </resume-section>
          <resume-section [title]="data.skills.title" class="skills">
            @for (milestone of data.skills.milestones; track milestone.title) {
            <resume-milestone
              [class.last-milestone]="$last"
              [title]="milestone.title"
              [elements]="milestone.elements"
            />
            }
          </resume-section>
        </div>
        <div class="content">
          <resume-section title="Profile">
            <div class="profile-content">{{ data.profile }}</div>
          </resume-section>
          @for (section of data.sections; track section.title) {
          <resume-section [title]="section.title" [class.last-section]="$last">
            @for (milestone of section.milestones; track milestone.title) {
            <resume-milestone
              [class.last-milestone]="$last"
              [title]="milestone.title"
              [subtitle]="milestone.subtitle"
              [elements]="milestone.elements"
              [timeline]="milestone.timeline"
            />
            }
          </resume-section>
          }
        </div>
      </div>
    </div>
  `,
  styles: `
	::ng-deep #title * { border: none; }
	::ng-deep #title .title { font-size: 3em; }
  	.home { padding: 16px; padding-bottom: 0; margin-bottom: 16px; box-sizing: border-box; display: flex; flex-direction: column; width: 810px; }
	.main { display: flex; flex-direction: row; }
	.info { display: flex; flex-direction: column; flex: 1; }
	.content { display: flex; flex-direction: column; flex: 3; }
  `,
})
export default class HomeComponent {
  data = {
    name: "Amit Bublil",
    routine: ["Full Stack Developer", "Team Leader", "Tech Lead"],
    contact: {
      location: "Ramat Gan, Israel",
      phone: "052-7528885",
      email: "ambuex@gmail.com",
      github: "github.com/Amit775",
      linkedin: "linkedin.com/in/amit-bublil",
    },
    profile: `
		I have 6 years of experience, with 2 years as a team-leader.
		I am Full-Stack developer with 'can-do' attitude and passionate about code.
		I am continually learning to stay up-to-date with Angular and other frameworks.
		As a team member, I always eager to share knowledge and learn from others.
	`,
    skills: {
      title: "Skills",
      milestones: [
        {
          title: "Languages",
          elements: ["TypeScript", "C#"],
        },
        {
          title: "Frameworks",
          elements: ["Angular", "Nest.js", "Node.js", ".NetCore", ".Net"],
        },
        {
          title: "Libraries",
          elements: ["Akita", "NGRX"],
        },
        {
          title: "Databases",
          elements: ["MongoDB"],
        },
        {
          title: "Development Tools",
          elements: [
            "Nx",
            "Git",
            "Gitlab-CI",
            "Openshift",
            "Jenkins",
            "Jira",
            "Grafana",
            "Kiabana",
          ],
        },
      ],
    },
    sections: [
      {
        title: "Experience",
        milestones: [
          {
            title: "Full-Stack Developer & Tech Lead",
            subtitle: "Intelligence Unit, IDF",
            elements: [
              "consult and mentor developers and team leaders",
              "help design and implement cross-teams solutions and optimizations",
              "research and establish modern microfrontends architecture using Angular, Nx and Module Federation",
            ],
            timeline: "Mar 2024 - Present",
          },
          {
            title: "Team Leader",
            subtitle: "Intelligence Unit, IDF",
            elements: [
              "manage a team with 7 developers and QA, work closely with PM using Agile methodology",
              "modernize our projects to use Angular 16, nestjs and Nx",
              "led the merging of our project with two additional projects to create a unified platform with emphasis on performance and unified UI/UX",
            ],
            timeline: "Nov 2021 - Mar 2024",
          },
          {
            title: "Full-Stack Developer",
            subtitle: "Intelligence Unit, IDF",
            elements: [
              "develop and maintain features in large-scale realtime (SignalR) geographic applications using Angular 5-8, with microservices in .NetCore and a legacy monolith in .Net",
              "improve our CI/CD pipelines, monitoring and logging tools using Jenkins, Grafana and Kiabana",
              "feature example: create geographic layers from excel or shape files.",
            ],
            timeline: "Nov 2018 - Nov 2021",
          },
        ],
      },
      {
        title: "Education",
        milestones: [
          {
            title: "B.Sc. in Physics and Electrical Engineering",
            subtitle: "Tel Aviv University",
            elements: [
              "Psagot - Excellence Program",
              "focus on computer structure and electronic devices",
            ],
            timeline: "2014 - 2018",
          },
        ],
      },
    ],
  };
}
