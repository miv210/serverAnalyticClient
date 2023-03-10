import { Injectable, OnInit, Component, ChangeDetectionStrategy } from "@angular/core";
import { User } from "src/app/models/User";
import { HttpService } from "src/app/services/runningProcService";
import { RunningProcess } from "src/app/models/RunningProcess";
import {FormControl, FormGroup, Validators} from '@angular/forms';
import {TuiValueContentContext} from '@taiga-ui/core';
import {
    TuiContextWithImplicit,
    TuiIdentityMatcher,
    TuiStringHandler,
    EMPTY_ARRAY,
    tuiPure, 
    TuiDay, 
    TuiTime
} from '@taiga-ui/cdk';
import { Server } from "src/app/models/Server";
import * as moment from "moment";



@Component({
    selector: 'runing-proc',
    templateUrl: './runningProcesses.component.html',
    styleUrls: ['./runningProcesses.component.scss'],
  })

export class MemoryComponent implements OnInit{
    runningProcesses : RunningProcess[] = [];
    readonly columns = ['name', 'memory', 'dateCheck'];
    readonly columns1 = ['name', 'pid','sessionNumber', 'memory', 'dateCheck'];
    servers: Server[] = [];
    sortedProcesses : RunningProcess[] = [];
    constructor(private httpService: HttpService){}

    testForm = new FormGroup({
        testValue: new FormControl([new TuiDay(2023,2,7),new TuiTime(3, 52)]),
    });
    

    value = this.servers[0]?.id;
    
    
    

    ngOnInit() {
        this.httpService.getMemoryRunning().subscribe({next:(data:RunningProcess[]) =>  this.runningProcesses= data});
        this.httpService.getServers().subscribe({next:(data:Server[]) => this.servers=data});
    }

    @tuiPure
    stringify(
        items: readonly Server[],
        
    ): TuiStringHandler<TuiContextWithImplicit<number>> {
        const map = new Map(items.map(({id, name}) => [id, name] as [number, string]));
        
        return ({$implicit}: TuiContextWithImplicit<number>) => map.get($implicit) || '';
    }

    selectChange(){
        this.sortedProcesses = this.runningProcesses.filter(p=> p.idServer === this.value );
    }

    filterChange(){
       let date = this.testForm.controls.testValue.value
       let year = (<TuiDay>((date ?? [TuiDay.currentLocal])[0])).year;
       let month = (<TuiDay>((date ?? [TuiDay.currentLocal])[0])).month;
       let day = (<TuiDay>((date ?? [TuiDay.currentLocal])[0])).day.toString();     
       let stringDate = `${day}.${month + 1}.${year} ${(date ?? [TuiTime.currentLocal])[1].toString()}`;
       
       this.sortedProcesses = this.runningProcesses.filter(p=> p.idServer === this.value && p.date == stringDate);
    }
    clearFilter(){
        this.sortedProcesses = this.runningProcesses.filter(p=> p.idServer === this.value );
    }
    toggle(run: RunningProcess) {
        run.expanded = !run.expanded;
    }
    
}