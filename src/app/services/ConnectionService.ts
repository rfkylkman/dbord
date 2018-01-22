import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../domain/car';
import { Total } from '../domain/total';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/toPromise';


import { Router, ActivatedRoute, Params } from '@angular/router';


@Injectable()
export class ConnectionService {
    

    constructor(private http: Http) {}
    
    getIPaddress(): Observable<string>{
        return this.http.get('https://ipinfo.io/json/?callback')
        .map((res:Response) => <string> res.json().ip)
        .do(data => console.log('All: '+ JSON.stringify(data)))
        .catch(this.handleError);
    }

    getDataSatu(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema])
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getDataDua(): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json().isi2)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE
            .catch(this.handleError);
    }

    getDataTotal(): Observable<Total[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Total[]> res.json().isi3)
            .do(data=> console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Connection error');
    }


}