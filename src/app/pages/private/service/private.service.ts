import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  DELETE_TEAM_BY_ID,
  POST_CREATE_TEAM,
  PUT_TEAM_BY_ID
} from 'src/app/constants';
import { Team } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class PrivateService {
  private baseUrl: string = 'https://wo-fifa.azurewebsites.net';

  constructor(private http: HttpClient) {}

  createTeam(teamData: Team): Observable<any> {
    const url = `${this.baseUrl}${POST_CREATE_TEAM}`;
    return this.http.post(url, teamData);
  }

  updateTeamById(id: number, updatedData: Team): Observable<any> {
    const url = `${this.baseUrl}${PUT_TEAM_BY_ID}${id}`;
    return this.http.put(url, updatedData);
  }

  deleteTeamById(id: number): Observable<unknown> {
    const url = `${this.baseUrl}${DELETE_TEAM_BY_ID}${id}`;
    return this.http.delete(url);
  }
}
