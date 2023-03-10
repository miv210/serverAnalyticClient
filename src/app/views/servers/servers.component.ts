import { Component, OnInit, Inject, Injector } from '@angular/core';
import {FormControl, FormGroup} from '@angular/forms'
import { Server } from 'src/app/models/Server';
import { ServersService } from 'src/app/services/serversService';
import {PolymorpheusComponent} from '@tinkoff/ng-polymorpheus';
import {TuiDialogService} from '@taiga-ui/core';
import { DialogAddServerComponent } from 'src/app/components/dialog-add-server/dialog-add-server.component';

@Component({
  selector: 'app-servers',
  templateUrl: './servers.component.html',
  styleUrls: ['./servers.component.scss']
})
export class ServersComponent implements OnInit{

  servers: Server[] = [];
  label = "";

  serverForm = new FormGroup({
    nameServer: new FormControl(),
    ipServer: new FormControl()
  });

  
  constructor(
    private service: ServersService,
    ){}

  ngOnInit(){
    this.service.getServers().subscribe({next:(data: Server[]) => this.servers=data});
  }

  deleteS(id:number | undefined ){
    if(id != undefined)
      this.service.deletServer(id).subscribe(
        result => {
          let ind = this.servers.findIndex(p=>p.id == id);
          
          this.servers.splice(ind,1);
        }
      );
  }

  open = false;
  openDialogAddServ(){
    this.open= true;
    this.label = "Добавить сервер"
  }
  openDialogRedactServ(){
    this.open= true;
    this.label = "Редактировать сервер"
  }

  addServer(){
    if(this.label == "Добавить сервер"){
      let nameServer = <string>(this.serverForm.controls.nameServer.value);
      let ipServer = <string>(this.serverForm.controls.ipServer.value);

      if ( nameServer != null && ipServer!= null) {
        let server = new Server(nameServer, ipServer)

        this.service.addServer(server).subscribe(
          result => {
            this.servers.push(server);
          },
          error => {

          }
        );
      }
    }
  }
}
