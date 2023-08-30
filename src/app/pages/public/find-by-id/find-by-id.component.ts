import { Component } from '@angular/core';
import { Content } from 'src/app/models';
import { PublicService } from '../service/public.service';

@Component({
  selector: 'app-find-by-id',
  templateUrl: './find-by-id.component.html',
  styleUrls: ['./find-by-id.component.scss'],
})
export class FindByIdComponent {
  team: Content | null = null;
  searchId: number | null = null;

  constructor(private publicService: PublicService) {}

  searchTeamById() {
    if (this.searchId) {
      this.publicService.getTeamById(this.searchId).subscribe(
        (result) => {
          this.team = result;
        },
        (error) => {
          console.error('Error fetching team:', error);
          this.team = null;
        }
      );
    }
    console.log(this.team);
  }
}
