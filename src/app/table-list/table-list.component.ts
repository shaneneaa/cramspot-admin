import { Component, OnInit } from '@angular/core';
import { WorkspaceService } from 'app/services/workspace.service';

@Component({
  selector: 'app-table-list',
  templateUrl: './table-list.component.html',
  styleUrls: ['./table-list.component.css']
})
export class TableListComponent implements OnInit {

  workspaces;

  constructor(
    private workspaceService: WorkspaceService
  ) { }

  ngOnInit() {
    this.workspaceService.getWorkspace().subscribe(data =>{
      this.workspaces = data;
    });
  }

  toggleWorkspaceVerify(workspace){
    this.workspaceService.toggleWorkspace(workspace).subscribe(data=>{

    });
  }

}
