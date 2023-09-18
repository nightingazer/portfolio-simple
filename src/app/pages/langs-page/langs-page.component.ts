import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SkillCardComponent, SkillCardData } from 'src/app/components/skill-card/skill-card.component';
import { TechStackService } from 'src/app/services/tech-stack.service';

@Component({
  selector: 'app-langs-page',
  standalone: true,
  imports: [CommonModule, SkillCardComponent],
  templateUrl: './langs-page.component.html',
  styleUrls: ['./langs-page.component.scss']
})
export class LangsPageComponent {
  items: SkillCardData[] = []

  constructor(techStackService: TechStackService) {
    this.items = techStackService.getAllLangs()
  }
}
