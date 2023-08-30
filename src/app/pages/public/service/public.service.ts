import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import {
  GET_0_TO_100,
  GET_LIST_TEAMS,
  GET_TEAM_BY_ID,
  GET_TEAM_BY_INIT_DATE_END_DATE,
  POST_LOGIN,
} from 'src/app/constants';
import { Content, Team } from 'src/app/models';

@Injectable({
  providedIn: 'root',
})
export class PublicService {
  private baseUrl: string = 'https://wo-fifa.azurewebsites.net';

  constructor(private http: HttpClient) {}

  login(credentials: Credential): Observable<unknown> {
    const url = `${this.baseUrl}${POST_LOGIN}`;
    return this.http.post(url, credentials);
  }

  getListOfTeams(): Observable<Team> {
    const url = `${this.baseUrl}${GET_LIST_TEAMS}${GET_0_TO_100}`;
    return this.http.get<Team>(url);
  }

  getTeamByInitAndEndDate(
    initDate: string,
    endDate: string
  ): Observable<Content[]> {
    const url = `${this.baseUrl}${GET_TEAM_BY_INIT_DATE_END_DATE}${initDate}/${endDate}`;
    console.log(url);

    return this.http.get<Content[]>(url);
  }

  getTeamById(id: number): Observable<Content> {
    const url = `${this.baseUrl}${GET_TEAM_BY_ID}${id}`;
    return this.http.get<Content>(url);
  }
}
