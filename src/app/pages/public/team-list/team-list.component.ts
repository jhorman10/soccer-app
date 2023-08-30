import { Component } from '@angular/core';
import { Content } from 'src/app/models';
import { PublicService } from '../service/public.service';

@Component({
  selector: 'app-team-list',
  templateUrl: './team-list.component.html',
  styleUrls: ['./team-list.component.scss'],
})
export class TeamListComponent {
  listOfTeams: Content[] = [];

  constructor(private publicService: PublicService) {}

  ngOnInit() {
    this.publicService
      .getListOfTeams()
      .subscribe((teams) => (this.listOfTeams = teams.content));
  }
}
