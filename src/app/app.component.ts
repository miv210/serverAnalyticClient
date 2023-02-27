import {ChangeDetectionStrategy, Inject, Component } from '@angular/core';
import {TuiElasticContainerComponent} from '@taiga-ui/kit'; 
import {TuiAlertService} from '@taiga-ui/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AppComponent {
  open = false;
 
    onClick(): void {
        this.open = !this.open;
    }
 
    onObscured(obscured: boolean): void {
        if (obscured) {
            this.open = false;
        }
    }
 
    onActiveZone(active: boolean): void {
        this.open = active && this.open;
    }
}
