import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/app/models/User';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { RunningProcess } from 'src/app/models/RunningProcess';
import { Server } from '../models/Server';

@Injectable({providedIn: 'root'})
export class HttpService{
   
    constructor(private http: HttpClient){ }

    getMemoryRunning() : Observable<RunningProcess[]> {
        return this.http.get('http://localhost:5272/api/metrics/runninProcesses').pipe(map((data:any)=>{
            let usersList = data;
            console.log(usersList);
            return usersList.map(function(runningProcesses: any): RunningProcess{
                return new RunningProcess(
                    runningProcesses.id,
                    runningProcesses.name, 
                    runningProcesses.memory,
                    runningProcesses.date,
                    runningProcesses.dateCheck,
                    runningProcesses.nameSession,
                    runningProcesses.pid,
                    runningProcesses.sessionNumber,
                    runningProcesses.expanded,
                    runningProcesses.children,
                    runningProcesses.idServer,
                );
              });
        }));
    }
    getServers():Observable<Server[]>{
        return this.http.get("http://localhost:5272/api/servers").pipe(map((data:any) => {
            let serversList = data;
            console.log(serversList);
            return serversList.map(function(servers: any): Server{
                return new Server(
                    servers.id, 
                    servers.name, 
                    servers.ip
                    );
            })
        }))
    }
}