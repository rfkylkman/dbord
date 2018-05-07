import { Injectable } from '@angular/core';
import { Http, Response } from '@angular/http';
import { Car } from '../domain/car';
import { Total } from '../domain/total';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/map';
import 'rxjs/add/operator/do';
import 'rxjs/add/operator/take';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Injectable()
export class ConnectionService {
    

    constructor(private http: Http) {}

    private handleError(error: Response) {
        console.error(error);
        return Observable.throw(error.json().error || 'Connection error');
    }

    getInterval(): Observable<string>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/sysparam/refreshinterval')
        .map((res:Response) => <string> res.json().refreshInterval).take(1)   
    }


// RTGS

    getStatisticalIndicatorTable(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/settlementsummary/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().currentDay)
            .catch(this.handleError);
            
            
    }
  
    getTotalAmountToday(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/settlementsummary/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().totalAmountToDay)
           .do(data=> console.log('All: ' + JSON.stringify(data)))
            
            
    }

    getTotalAmountPrevDay(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/settlementsummary/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().totalAmountPrevDay)
            
    }

    getTotalAmountPrevWeek(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/settlementsummary/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().totalAmountPrevWeek)
            
            
    }

    getTotalVolumeToday(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/settlementsummary/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().totalVolumeToDay)
            
    }

    getTotalVolumePrevDay(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/settlementsummary/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().totalVolumePrevDay)
            
    }

    getTotalVolumePrevWeek(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/settlementsummary/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().totalVolumePrevWeek)
    }

    getErrorInformation(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/statistical/supporterrorinfos')
            .map((res:Response) => <any> res.json())
            .catch(this.handleError);
            
    }

    getOperationalIndicators_windowTime(): Observable<string>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/businessday')
            .map((res:Response) => <string> res.json().windowTime)
            .catch(this.handleError);
            
    }

    getOperationalIndicators_extended(): Observable<string>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/businessday')
            .map((res:Response) => <string> res.json().extendedPeriod)
            .catch(this.handleError);
            
    }

    getOperationalIndicators_today(): Observable<string>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/businessday')
            .map((res:Response) => <string> res.json().valueDate)
            .catch(this.handleError);
            
    }

    getDisconnectedMember(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().disconnectedMembers)
            .catch(this.handleError);
            
    }

    getMembersConnected(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().numOfConnectedMembers)
            .catch(this.handleError);
            
    }

    getMembersDisconnected(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/membersconnectionstatus')
            .map((res:Response) => <any> res.json().numOfDisconnectedMembers)
            .catch(this.handleError);
            
    }

    getPvpStatus(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().pvpgateway)
            .catch(this.handleError);
            
    }

    getHartisstatus(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().hartis)
            .catch(this.handleError);
            
    }

    getBIsosastatus(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().bisosa)
            .catch(this.handleError);
            
    }

    getSKNstatus(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().sknbi)
            .catch(this.handleError);
            
    }

    getS4status(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/systemconnections')
            .map((res:Response) => <any> res.json().bissss)
            .catch(this.handleError);
            
    }

    getDcStatus(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().dcSystemStatus)
            .catch(this.handleError);
            
    }

    getActiveSystem(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().activeSystem)
            .catch(this.handleError);
            
    }

    getDrcStatus(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().drcSystemStatus)
            .catch(this.handleError);
            
    }

    getReplicationTime(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().replicationTime)
            
            
    }

    getProcessingTime(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().processingTime)
            .catch(this.handleError);
            
    }

    getProcessingStatus(): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/operational/serverperformancestatus')
            .map((res:Response) => <any> res.json().processingStatus)
            .catch(this.handleError);
            
    }


    getThroughput(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/throughputguideline/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json())
            .catch(this.handleError);
            
    }

    getCurrentQueueTable(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/currentqueue/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().queueList)
            .catch(this.handleError);
            
    }

    getCurrentQueueParticipant(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/currentqueue/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().numOfParticipants)
            .catch(this.handleError);
            
    }

    getCurrentQueueTotal(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/currentqueue/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().sumOfTransactions)
            .catch(this.handleError);
            
    }


    getTurnOverRatio(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/turnoverratio/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json())
            .catch(this.handleError);
            
    }

    getIntradayTable(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/ilf/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().ilfTransactions)
            .catch(this.handleError);
            
    }

    getIntradayParticipant(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/ilf/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().ilfSummary.numOfParticipants)
            .catch(this.handleError);
            
    }

    getIntradayActiveTotal(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/ilf/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().ilfSummary.sumOfActiveItems)
            .catch(this.handleError);
            
    }

    getIntradayPaidTotal(itema: string): Observable<any>{
        return this.http.get('http://10.216.37.14:40401/dashboard/api/rtgs/liquidity/ilf/'+itema.toUpperCase())
            .map((res:Response) => <any> res.json().ilfSummary.sumOfPaidItems)
            .catch(this.handleError);
            
    }

}