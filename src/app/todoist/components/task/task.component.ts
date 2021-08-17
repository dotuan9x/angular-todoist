import {Component, Input, Output, EventEmitter, OnInit} from '@angular/core';
import {Router, ActivatedRoute, ParamMap} from '@angular/router';

@Component({
  selector: 'app-task',
  templateUrl: './task.component.html'
})
export class TaskComponent implements OnInit {
  @Input() title: string = "Title";

  // @Output() onClickTask = new EventEmitter();

  constructor(private route: ActivatedRoute,) {

  }

  ngOnInit(): void {
    console.log('ngOnInit', this.title)

    this.route.queryParams.subscribe(params => {
      //this.name = params['name'];
      console.log('params[\'name\']', params['name'])
    });
  }

  onClickTask() {
    console.log('onClickTask')
    // this.onClickTask.emit()
  }

  onClickTaskDone() {

  }

  onClickTaskStar() {

  }
}
