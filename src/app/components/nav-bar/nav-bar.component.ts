import { Component, Inject } from '@angular/core';
import { Router } from '@angular/router';
import {TuiAlertService} from '@taiga-ui/core';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrls: ['./nav-bar.component.scss']
})
export class NavBarComponent {
  activeItemIndex = 0;
 
  constructor(
      @Inject(TuiAlertService)
      private readonly alertService: TuiAlertService,
      private router: Router
  ) {}

  goAnalytics(){
    this.router.navigate(['main/analytics'])
  }
  goHistory(){
    this.router.navigate(['main/history'])
  }
  goServers(){
    this.router.navigate(['main/servers'])
  }
}
