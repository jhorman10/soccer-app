import { Component } from '@angular/core';
import { Content } from 'src/app/models';
import { PublicService } from '../service/public.service';

@Component({
  selector: 'app-find-by-date',
  templateUrl: './find-by-date.component.html',
  styleUrls: ['./find-by-date.component.scss'],
})
export class FindByDateComponent {
  teams: Content[] = [];
  startDate: string = '';
  endDate: string = '';

  constructor(private publicService: PublicService) {}

  searchTeamsByDate() {
    if (this.startDate && this.endDate) {
      const formattedStartDate = this.formatDate(this.startDate);
      const formattedEndDate = this.formatDate(this.endDate);
      this.publicService
        .getTeamByInitAndEndDate(formattedStartDate, formattedEndDate)
        .subscribe(
          (result: Content[]) => {
            this.teams = result;
          },
          (error) => {
            console.error('Error fetching teams:', error);
            this.teams = [];
          }
        );
    }
  }

  formatDate(date: string): string {
    const [day, month, year] = date.split('-');
    return `${year}-${month}-${day}`;
  }
}
