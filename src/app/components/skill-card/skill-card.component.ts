import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ProgressBarComponent } from "../progress-bar/progress-bar.component";

export type SkillCardData = {
  title: string,
  experience: number,
  brief: string,
  description?: string
}


@Component({
  selector: 'app-skill-card',
  standalone: true,
  templateUrl: './skill-card.component.html',
  styleUrls: ['./skill-card.component.scss'],
  imports: [CommonModule, ProgressBarComponent]
})
export class SkillCardComponent {
  currentYear = new Date().getFullYear();

  @Input({ required: true }) data!: SkillCardData;
  @Input() brief = true;

  getExperienceLabel(): string {
    const years = this.data.experience;
    if (years < 1) {
      return "< 1 year"
    }

    return `${years}+ year${years > 1 ? 's' : ''}`;
  }


}
