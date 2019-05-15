import {Injectable} from '@angular/core';
import {Http,Response} from '@angular/http';
import 'rxjs/add/operator/map';
import {Observable} from 'rxjs/observable';

@Injectable()
export class DataService{

    constructor(http: Http){}
    createUser(data: any){
        console.log(data);
    }
}