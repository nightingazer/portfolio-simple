import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent, SkillCardData } from "../../components/skill-card/skill-card.component";
import { RouterModule } from '@angular/router';
import { TechStackService } from 'src/app/services/tech-stack.service';
import { HeaderComponent } from 'src/app/components/header/header.component';
import { IconComponent } from 'src/app/components/icon/icon.component';

@Component({
  selector: 'app-home-page',
  standalone: true,
  templateUrl: './home-page.component.html',
  styleUrls: ['./home-page.component.scss'],
  imports: [CommonModule, SkillCardComponent, RouterModule, HeaderComponent, IconComponent]
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
