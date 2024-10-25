import { Component, inject, OnInit } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { MasterService } from './Service/master.service';
import { ApiResponseModel, ITask } from './Model/task';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css',
})
export class AppComponent implements OnInit {
  TaskList: ITask[] = [];

  masterService = inject(MasterService);

  ngOnInit(): void {
    this.loadAllTask();
  }

  loadAllTask() {
    this.masterService.getAllTaskList().subscribe((res: ApiResponseModel) => {
      this.TaskList = res.data;
    });
  }
}
