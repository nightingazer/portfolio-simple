import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent, SkillCardData } from "../../components/skill-card/skill-card.component";
import { RouterModule } from '@angular/router';
import { TechStackService } from 'src/app/services/tech-stack.service';
import { HeaderComponent } from 'src/app/component/header/header.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [CommonModule, SkillCardComponent, RouterModule, HeaderComponent]
})
export class HomePageComponent {
  langs: SkillCardData[] = [
  ]

  technologies: SkillCardData[] = [
  ]

  constructor(private techStack: TechStackService) {}

  ngOnInit(): void {
    this.langs = this.techStack.getFeaturedLangs();
    this.technologies = this.techStack.getFeaturedTechnologies();
  }
}
