import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'todoist-skeleton',
  templateUrl: './skeleton.component.html',
  styles: [':host { width: 100% }']
})
export class SkeletonComponent implements OnInit {

  constructor() { }

  ngOnInit(): void {
  }

}
