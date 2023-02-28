import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/models/User';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import {RunningProcess} from '../models/RunningProcess'

@Injectable({providedIn: 'root'})
export class HttpService{
   
    constructor(private http: HttpClient){ }
 
    postData(user: User){
          
        const body = {name: user.login, age: user.password};
        return this.http.post('http://localhost:5272/api/metrics/login/', body); 
    }

    getMemoryRuning() : Observable<RunningProcess[]> {
        return this.http.get('http://localhost:5272/api/metrics/runninProcesses').pipe(map((data:any)=>{
            let usersList = data;
            console.log(usersList);
            return usersList.map(function(runningProcesses: any): RunningProcess {
                return new RunningProcess(runningProcesses.id, 
                    runningProcesses.name, 
                    runningProcesses.pid, 
                    runningProcesses.sessionNumber, 
                    runningProcesses.memory, 
                    runningProcesses.dateCheck, 
                    runningProcesses.nameSession);
              });
        }));
    }
}