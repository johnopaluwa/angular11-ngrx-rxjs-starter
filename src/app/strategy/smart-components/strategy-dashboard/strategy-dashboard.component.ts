import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { ModuleUrls, UserUrls } from '@app/root/enums/global-url';

@Component({
  selector: 'yova-strategy-dashboard',
  templateUrl: './strategy-dashboard.component.html',
  styleUrls: ['./strategy-dashboard.component.scss'],
})
export class StrategyDashboardComponent implements OnInit {
  constructor(
    private readonly activatedRoute: ActivatedRoute,
    private readonly router: Router
  ) {}

  ngOnInit(): void {}

  public gotoNotifications() {
    this.router.navigate([ModuleUrls.User, UserUrls.Notification], {
      relativeTo: this.activatedRoute.root,
    });
  }
}
