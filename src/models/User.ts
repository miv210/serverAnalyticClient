export class User{
    constructor(
        public login:string, 
        public password: string,
        public role?:string,
        public id?: number,
        ){}
}