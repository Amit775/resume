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
      email: "bublilamit@gmail.com",
      github: "github.com/Amit775",
      linkedin: "linkedin.com/in/amit-bublil",
    },
    profile: `
	I am a Full-Stack Developer with passion for coding.
	I have 6 years of experience, including 2 years as a team leader in 8200 unit. 
	I constantly learn to stay up-to-date with Angular and other frameworks.
	As a team member, I am always eager to share knowledge and learn from others.
	`,
    skills: {
      title: "Skills",
      milestones: [
        {
          title: "Languages",
          elements: ["TypeScript", "C#", "Python"],
        },
        {
          title: "Frameworks",
          elements: ["Angular", "NestJS", "Node.js", ".NetCore"],
        },
        {
          title: "State Management",
          elements: ["Akita", "NgRx"],
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
            "Openshift",
            "Grafana",
            "Kibana",
            "Gitlab-CI",
            "Jenkins",
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
            subtitle: "8200 - Intelligence Unit, IDF",
            elements: [
              "Consulted and mentored developers and team leaders.",
              "Helped design and implement cross-team solutions and optimizations.",
              "Researched and established a modern microfrontend architecture using Angular, Nx, and Module Federation.",
            ],
            timeline: "Mar 2024 - Present",
          },
          {
            title: "Team Leader",
            subtitle: "8200 - Intelligence Unit, IDF",
            elements: [
              "Managed a team of 7 developers and a QA, working closely with the Product using Agile methodology.",
              "Modernized projects to use Angular 16, Nest.js, and Nx.",
              "Led the integration of three projects into a unified platform with a focus on performance and a unified UI/UX.",
            ],
            timeline: "Nov 2021 - Mar 2024",
          },
          {
            title: "Full-Stack Developer",
            subtitle: "8200 - Intelligence Unit, IDF",
            elements: [
              "Developed and maintained features in large-scale, real-time (SignalR) geographic applications using Angular 5-8, with microservices in .NetCore and a legacy monolith in .Net.",
              "Improved CI/CD pipelines, monitoring, and logging tools using Jenkins, Grafana and Kibana.",
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
              "Focus on computer structure and electronic devices",
            ],
            timeline: "2014 - 2018",
          },
        ],
      },
    ],
  };
}
