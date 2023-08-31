import { Component, Input } from '@angular/core';
import { Content } from 'src/app/models';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss'],
})
export class CardTeamComponent {
  @Input() team!: Content;
}
