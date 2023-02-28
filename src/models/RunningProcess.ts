import { DatePipe } from "@angular/common";

export class RunningProcess{
    constructor(
        public id: number,
        public name:string, 
        public pid: number,
        public sessionNumber:string,
        public memory: number,
        public dateCheck: any,
        public children: Array<RunningProcess>,
        public nameSession?: number,
        ){}
}