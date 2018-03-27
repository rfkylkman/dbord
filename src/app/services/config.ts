import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';

@Injectable()
export class config {

    constructor(private http: Http) {}

    getIP(): Observable<string>{
        return this.http.get('assets/conf/config.json')
        .map((res:Response) => <string> res.json().region)   
    }

}