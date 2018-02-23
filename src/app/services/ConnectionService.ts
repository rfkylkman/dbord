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

    getStatisticalIndicatorTable(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/statistical/settlementsummary/'+itema)
            .map((res:Response) => <any> res.json().currentDay)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getStatisticalIndicatorChart(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].StatisticalIndicatorChart2)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getStatisticalVolume(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].StatisticalIndicatorChart.totalVolume)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getStatisticalAmount(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].StatisticalIndicatorChart.totalAmount)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getErrorInformation(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/statistical/supporterrorinfos')
            .map((res:Response) => <any> res.json())
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators_windowTime(): Observable<string>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/businessday')
            .map((res:Response) => <string> res.json().windowTime)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators_extended(): Observable<string>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/businessday')
            .map((res:Response) => <string> res.json().extendedPeriod)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators_today(): Observable<string>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/businessday')
            .map((res:Response) => <string> res.json().valueDate)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getDisconnectedMember(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().disconnectedMembers)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMembersConnected(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().numOfConnectedMembers)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMembersDisconnected(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().numOfDisconnectedMembers)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getPvpStatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().pvpgateway)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getHartisstatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().hartis)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getBIsosastatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().bisosa)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getSKNstatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().sknbi)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getS4status(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().bissss)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getDCstatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().dcSystemStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getActiveSystem(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().activeSystem)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getDRCstatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().drcSystemStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getProcessingTime(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().processingTime)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getProcessingStatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().processingStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getServerStatus(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].ServerStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getThroughput(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/throughputguideline/idr')
            .map((res:Response) => <any> res.json())
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getCurrentQueueTable(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/currentqueue/'+itema)
            .map((res:Response) => <any> res.json().queueList)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getCurrentQueueParticipant(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/currentqueue/'+itema)
            .map((res:Response) => <any> res.json().numOfParticipants)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getCurrentQueueTotal(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/currentqueue/'+itema)
            .map((res:Response) => <any> res.json().sumOfTransactions)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }


    getTurnOverRatio(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].TurnOverRatio)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getIntradayTable(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/ilf/'+itema)
            .map((res:Response) => <any> res.json().ilfTransactions)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getIntradayParticipant(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/ilf/'+itema)
            .map((res:Response) => <any> res.json().ilfSummary.numOfParticipants)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getIntradayActiveTotal(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/ilf/'+itema)
            .map((res:Response) => <any> res.json().ilfSummary.sumOfActiveItems)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getIntradayPaidTotal(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/rtgs/liquidity/ilf/'+itema)
            .map((res:Response) => <any> res.json().ilfSummary.sumOfPaidItems)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }
//////////////////////////////////////////////////////////////////////////////////////////////////////////////
// SSSS
//////////////////////////////////////////////////////////////////////////////////////////////////////////////

    getStatisticalIndicatorTable_SSSS(itema: string): Observable<any>{
    return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/statistical/settlementsummary/'+itema)
        .map((res:Response) => <any> res.json().currentDay)
        .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
        .catch(this.handleError);
    }

    getStatisticalVolume_SSSS(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].StatisticalIndicatorChart.totalVolume)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getStatisticalAmount_SSSS(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].StatisticalIndicatorChart.totalAmount)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getExchangeRate(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/statistical/exchangerateinfo')
            .map((res:Response) => <any> res.json())
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getErrorInformation_SSSS(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/statistical/supporterrorinfos')
            .map((res:Response) => <any> res.json())
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators_windowTime_SSSS(): Observable<string>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/businessday')
            .map((res:Response) => <string> res.json().windowTime)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators_extended_SSSS(): Observable<string>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/businessday')
            .map((res:Response) => <string> res.json().extendedPeriod)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getOperationalIndicators_today_SSSS(): Observable<string>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/businessday')
            .map((res:Response) => <string> res.json().valueDate)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getDisconnectedMember_SSSS(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().disconnectedMembers)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMembersConnected_SSSS(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().numOfConnectedMembers)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMembersDisconnected_SSSS(itema: string): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().numOfDisconnectedMembers)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getETPstatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/systemconnections')
            .map((res:Response) => <any> res.json().pvpgateway)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getRTGSstatus(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/systemconnections')
            .map((res:Response) => <any> res.json().birtgs)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getHartisstatus_SSSS(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/systemconnections')
            .map((res:Response) => <any> res.json().hartis)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getBIsosastatus_SSSS(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/systemconnections')
            .map((res:Response) => <any> res.json().bisosa)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getSKNstatus_SSSS(): Observable<any>{
        return this.http.get('http://10.205.19.78:8080/dashboard/api/ssss/operational/systemconnections')
            .map((res:Response) => <any> res.json().sknbi)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }



    getSurroundingStatus_SSSS(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <any> res.json()[itema].SurroundingStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }
    
    getProcessingStatus_SSSS(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <any> res.json()[itema].ProcessingStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getServerStatus_SSSS(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <any> res.json()[itema].ServerStatus)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getQueueInsufficientSecurities(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <any> res.json()[itema].QueueInsufficientSecurities)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getQueueInsufficientFund(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <any> res.json()[itema].QueueInsufficientFund)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }

    getMaturitySecurities(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <any> res.json()[itema].MaturitySecurities)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }
    
    getCouponPayment(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small1.json')
            .map((res:Response) => <any> res.json()[itema].CouponPayment)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE 
            .catch(this.handleError);
    }
// TEST
    getDataSatu(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].isi)
            .do(data => console.log('All: ' + JSON.stringify(data))) //DEBUG USE
            .catch(this.handleError);
    }

    getDataDua(itema: string): Observable<any>{
        return this.http.get('assets/data/cars-small.json')
            .map((res:Response) => <any> res.json()[itema].isi2)
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