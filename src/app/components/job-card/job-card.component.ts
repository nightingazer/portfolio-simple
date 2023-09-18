import { Component, Input } from '@angular/core';
import { CommonModule } from '@angular/common';


export type JobCardData = {
  title: string;
  employer: string;
  location: string;
  startDate: Date;
  endDate?: Date;
  description: string;
  responsibilities: string[];
  technologies: string[];
  employerUrl?: string;
}


@Component({
  selector: 'app-job-card',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './job-card.component.html',
  styleUrls: ['./job-card.component.scss']
})
export class JobCardComponent {
  @Input({ required: true }) data!: JobCardData;
}
