import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {User} from 'src/models/User';
   
@Injectable()
export class HttpService{
   
    constructor(private http: HttpClient){ }
 
    postData(user: User){
          
        const body = {name: user.login, age: user.password};
        return this.http.post('http://localhost:5272/api/metrics/login/', body); 
    }
}