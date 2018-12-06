import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Api } from 'app/entities/api.class';

@Injectable({
  providedIn: 'root'
})
export class WorkspaceService {

  apiUrl:string = Api.URL+'workspace-all';

  constructor(private http: HttpClient) { }

  getWorkspace(){
    return this.http.get(this.apiUrl);
  }

  toggleWorkspace(workspace){
    return this.http.post(Api.URL+'workspace-verify',workspace);
  }
}
