import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import { map } from 'rxjs/operators';
import { Server } from '../models/Server';

@Injectable({providedIn: 'root'})
export class ServersService{
   
    constructor(private http: HttpClient){ }

    getServers():Observable<Server[]>{
        return this.http.get("http://localhost:5272/api/servers").pipe(map((data:any) => {
            let serversList = data;
            console.log(serversList);
            return serversList.map(function(servers: any): Server{
                return new Server(
                    servers.name, 
                    servers.ip,
                    servers.id, 
                    );
            })
        }))
    }

    deletServer(id: number){
        const url = `http://localhost:5272/api/servers/${id}`;
        return this.http.delete(url);
    }

    addServer(server: Server){
        return this.http.post('http://localhost:5272/api/servers/', server)
    }
}