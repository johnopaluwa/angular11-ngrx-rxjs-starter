import { Component, EventEmitter, Input, OnInit, Output } from '@angular/core';
import { ReplaySubject } from 'rxjs';

@Component({
  selector: 'yova-information-preview',
  templateUrl: './information-preview.component.html',
  styleUrls: ['./information-preview.component.scss'],
})
export class InformationPreviewComponent implements OnInit {
  @Input() public set infoIcon(val: string) {
    this.infoIcon$.next(val);
  }

  @Input() public set infoText(val: string) {
    this.infoText$.next(val);
  }

  @Input() public set actionIcon(val: string) {
    this.actionIcon$.next(val);
  }

  @Output() public readonly actionClicked = new EventEmitter();
  @Output() public readonly close = new EventEmitter();
  public readonly infoIcon$ = new ReplaySubject<string>(1);
  public readonly infoText$ = new ReplaySubject<string>(1);
  public readonly actionIcon$ = new ReplaySubject<string>(1);
  constructor() {}

  ngOnInit(): void {}

  public action(event: Event) {
    event.preventDefault();
    event.stopPropagation();
    this.actionClicked.next();
  }
}
