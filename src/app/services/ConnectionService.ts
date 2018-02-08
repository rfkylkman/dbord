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

// RTGS

    getStatisticalIndicatorTable(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].StatisticalIndicatorTable)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getStatisticalIndicatorChart(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].StatisticalIndicatorChart2)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getStatisticalVolume(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].StatisticalIndicatorChart.totalVolume)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getStatisticalAmount(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].StatisticalIndicatorChart.totalAmount)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getErrorInformation(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].ErrorInformation)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].OperationalIndicator)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMembersConnectionStatus(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].MembersConnectionStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getDisconnectedMember(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].DisconnectedMember)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getSurroundingStatus(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].SurroundingStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getProcessingStatus(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].ProcessingStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getServerStatus(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].ServerStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getThroughput(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].Throughput)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getCurrentQueue(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].CurrentQueue)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getTurnOverRatio(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].TurnOverRatio)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getIntradayLiquidityFacility(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].IntradayLiquidityFacility)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

// SSSS
    getStatisticalIndicatorTable_SSSS(itema: string): Observable<Car[]>{
    return this.http.get('assets/data/cars-small1.json')
        .map((res:Response) => <Car[]> res.json()[itema].StatisticalIndicatorTable)
        .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
        .catch(this.handleError);
    }

    getStatisticalIndicatorChart_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].StatisticalIndicatorChart)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getExchangeRate(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].ExchangeRate)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getErrorInformation_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].ErrorInformation)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].OperationalIndicator)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMembersConnectionStatus_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].MembersConnectionStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getDisconnectedMember_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].DisconnectedMember)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getSurroundingStatus_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].SurroundingStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }
    
    getProcessingStatus_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].ProcessingStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getServerStatus_SSSS(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].ServerStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getQueueInsufficientSecurities(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].QueueInsufficientSecurities)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getQueueInsufficientFund(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].QueueInsufficientFund)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMaturitySecurities(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].MaturitySecurities)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }
    
    getCouponPayment(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <Car[]> res.json()[itema].CouponPayment)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }
// TEST
    getDataSatu(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].isi)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE
            .catch(this.handleError);
    }

    getDataDua(itema: string): Observable<Car[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Car[]> res.json()[itema].isi2)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE
            .catch(this.handleError);
    }

    getDataTotal(itema: string): Observable<Total[]>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <Total[]> res.json()[itema].isi3)
            .do(data=> console.log('All: ' + JSON.stringify(data)))
            .catch(this.handleError)
    }

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Connection error');
    }


}