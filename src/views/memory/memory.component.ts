import { Injectable, OnInit, Component, ChangeDetectionStrategy } from "@angular/core";
import { User } from "src/models/User";
import { HttpService } from "src/services/HttpService";
import {RunningProcess} from '../../models/RunningProcess'


@Component({
    selector: 'mem',
    templateUrl: './memory.component.html',
    styleUrls: ['./memory.component.scss'],
  })

export class MemoryComponent implements OnInit{
    runningProcesses : RunningProcess[] = [];
    treProcesses : RunningProcess[] = [];
    
    constructor(private httpService: HttpService){}

    ngOnInit() {
        this.httpService.getMemoryRuning().subscribe({next:(data:RunningProcess[]) =>  this.runningProcesses= data}); 
    }
    
    readonly columns = ['name', 'pid', 'sessionNumber', 'memory', 'dateCheck'];
}