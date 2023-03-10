import { Component, Inject } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms';
import {TuiDialogService,TuiDialogContext} from '@taiga-ui/core';
import {POLYMORPHEUS_CONTEXT} from '@tinkoff/ng-polymorpheus';
import { Server } from 'src/app/models/Server';


@Component({
  selector: 'app-dialog-add-server',
  templateUrl: './dialog-add-server.component.html',
  styleUrls: ['./dialog-add-server.component.scss']
})
export class DialogAddServerComponent {
  serverForm = new FormGroup({
    nameServer: new FormControl(),
    ipServer: new FormControl()
  });

  

  constructor(
    @Inject(TuiDialogService) private readonly dialogService: TuiDialogService,
    @Inject(POLYMORPHEUS_CONTEXT)
    private readonly context: TuiDialogContext<Server, Server>,
        
  ) {}

  addServer(){
    let nameServer = <string>(this.serverForm.controls.nameServer.value);
    let ipServer = <string>(this.serverForm.controls.ipServer.value);
    let server = new Server(nameServer, ipServer)

    if ( nameServer != null && ipServer!= null) {
      this.context.completeWith(server);
    }
  }
}
