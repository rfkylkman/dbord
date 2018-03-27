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
export class ConnectionServiceSSSS {
    

    constructor(private http: Http) {}
    
        getStatisticalIndicatorTable_SSSS(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/settlementsummary/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().currentDay)
            
            
        }

        getTotalAmountToday(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/settlementsummary/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().totalAmountToDay)
                
                
        }
    
        getTotalAmountPrevDay(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/settlementsummary/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().totalAmountPrevDay)
                
                
        }
    
        getTotalAmountPrevWeek(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/settlementsummary/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().totalAmountPrevWeek)
                
                
        }
    
        getTotalVolumeToday(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/settlementsummary/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().totalVolumeToDay)
                
                
        }
    
        getTotalVolumePrevDay(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/settlementsummary/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().totalVolumePrevDay)
                
                
        }
    
        getTotalVolumePrevWeek(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/settlementsummary/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().totalVolumePrevWeek)
                
        }
    
        getExchangeRate(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/exchangerateinfo')
                .map((res:Response) => <any> res.json())
                
                
        }
    
        getErrorInformation_SSSS(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/statistical/supporterrorinfos')
                .map((res:Response) => <any> res.json())
                
                
        }
    
        getOperationalIndicators_windowTime_SSSS(): Observable<string>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/businessday')
                .map((res:Response) => <string> res.json().windowTime)
                
                
        }
    
        getOperationalIndicators_extended_SSSS(): Observable<string>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/businessday')
                .map((res:Response) => <string> res.json().extendedPeriod)
                
                
        }
    
        getOperationalIndicators_today_SSSS(): Observable<string>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/businessday')
                .map((res:Response) => <string> res.json().valueDate)
                
                
        }
    
        getDisconnectedMember_SSSS(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/membersconnectionstatus')
                .map((res:Response) => <any> res.json().disconnectedMembers)
                
                
        }
    
        getMembersConnected_SSSS(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/membersconnectionstatus')
                .map((res:Response) => <any> res.json().numOfConnectedMembers)
                
                
        }
    
        getMembersDisconnected_SSSS(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/membersconnectionstatus')
                .map((res:Response) => <any> res.json().numOfDisconnectedMembers)
                
                
        }
    
        getETPstatus(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/systemconnections')
                .map((res:Response) => <any> res.json().bietp)
                
                
        }
    
        getRTGSstatus(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/systemconnections')
                .map((res:Response) => <any> res.json().birtgs)
                
                
        }
    
        getHartisstatus_SSSS(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/systemconnections')
                .map((res:Response) => <any> res.json().hartis)
                
                
        }
    
        getBIsosastatus_SSSS(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/systemconnections')
                .map((res:Response) => <any> res.json().bisosa)
                
                
        }
    
        getSKNstatus_SSSS(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/systemconnections')
                .map((res:Response) => <any> res.json().sknbi)
                
                
        }
    
        getProcessingTime_SSSS(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/serverperformancestatus')
                .map((res:Response) => <any> res.json().processingTime)
                
                
        }
    
        getProcessingStatus_SSSS(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/serverperformancestatus')
                .map((res:Response) => <any> res.json().processingStatus)
                
                
        }
    
        getDcStatus(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/serverperformancestatus')
                .map((res:Response) => <any> res.json().dcSystemStatus)
                
                
        }

        getDrcStatus(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/serverperformancestatus')
                .map((res:Response) => <any> res.json().drcSystemStatus)
                
                
        }

        getActiveSystem(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/serverperformancestatus')
                .map((res:Response) => <any> res.json().activeSystem)
                
                
        }

        getReplicationTime(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/operational/serverperformancestatus')
                .map((res:Response) => <any> res.json().replicationTime)
                
                
        }

    
        getQueueInsufficientSecurities(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/queue/insufficientsecurities/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().queueList)
                
                
        }
    
        getQueueInsufficientSecuritiesMember(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/queue/insufficientsecurities/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().numOfParticipants)
                
                
        }
    
        getQueueInsufficientSecuritiesTotal(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/queue/insufficientsecurities/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().sumOfTransactions)
                
                
        }
    
        getQueueInsufficientFund(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/queue/insufficientfund/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().queueList)
                
                
        }
    
        getQueueInsufficientFundMember(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/queue/insufficientfund/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().numOfParticipants)
                
                
        }
    
        getQueueInsufficientFundTotal(itema: string): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/queue/insufficientfund/'+itema.toUpperCase())
                .map((res:Response) => <any> res.json().sumOfTransactions)
                
                
        }
    
        getMaturitySecurities(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/maturitysecurities')
                .map((res:Response) => <any> res.json().transactionsList)
                
                
        }
    
        getMaturitySecuritiesTotal(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/maturitysecurities')
                .map((res:Response) => <any> res.json().sumOfTransactions)
                
                
        }
        
        getCouponPayment(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/couponpayment')
                .map((res:Response) => <any> res.json().transactionsList)
                
                
        }
    
        getCouponPaymentTotal(): Observable<any>{
            return this.http.get('http://10.216.37.14:40401/dashboard/api/ssss/liquidity/couponpayment')
                .map((res:Response) => <any> res.json().sumOfTransactions)
                
                
        }


}