import {Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpService } from 'src/app/services/runningProcService';
import { User } from 'src/app/models/User';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'auth',
  templateUrl: './auth.component.html',
  styleUrls: ['./auth.component.scss'],
  changeDetection: ChangeDetectionStrategy.OnPush,
})
export class AuthComponent  {

    constructor(private auth: AuthService){

    }

    onSumbit(){
        const user = {
            login: this
        }
    }
    
}