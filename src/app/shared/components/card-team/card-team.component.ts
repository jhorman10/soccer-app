import { Component, Input } from '@angular/core';
import { Router } from '@angular/router';
import { Content } from 'src/app/models';
import { PrivateService } from './../../../pages/private/service/private.service';

@Component({
  selector: 'app-card-team',
  templateUrl: './card-team.component.html',
  styleUrls: ['./card-team.component.scss'],
})
export class CardTeamComponent {
  @Input() team!: Content;

  constructor(private router: Router, private privateService: PrivateService){}

  redirectToEdit(id: number) {
    this.router.navigate(['edit-team/', id])
  }

  deleteTeam(id: number){
    this.privateService.deleteTeamById(id);
  }
}
