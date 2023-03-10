import {Server} from './Server'

export class RunningProcess{
    constructor(
        public id: number,
        public name:string, 
        public memory: number,
        public date:string,
        public dateCheck: any,
        public nameSession?: number,
        public pid?: number,
        public sessionNumber?:string,
        public expanded:boolean = false,
        public children?: Array<RunningProcess>,
        
        public idServer?: number,
        ){}
}