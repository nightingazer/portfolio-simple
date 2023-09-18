import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent, SkillCardData } from 'src/app/components/skill-card/skill-card.component';
import { TechStackService } from 'src/app/services/tech-stack.service';

@Component({
  selector: 'app-technologies-page',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './technologies-page.component.html',
  styleUrls: ['./technologies-page.component.scss']
})
export class TechnologiesPageComponent {
  items: SkillCardData[] = [];

  constructor(private techStackService: TechStackService) {
    this.items = this.techStackService.getAllTech()
  }
}
