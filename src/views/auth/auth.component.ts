import {Component, ChangeDetectionStrategy, OnInit } from '@angular/core';
import { HttpService } from 'src/services/HttpService';
import { User } from 'src/models/User';
import { FormGroup } from '@angular/forms';
import { AuthService } from 'src/services/auth.service';

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