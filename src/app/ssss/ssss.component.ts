import { Component } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
import { exchangeRate } from 'app/domain/exchangeRate';
import { errorCode } from 'app/domain/errorCode';
import { ConnectionService} from 'app/services/ConnectionService';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ssss',
  templateUrl: './ssss.component.html',
  styleUrls: ['./ssss.component.css']
})
export class SsssComponent {

          currParam : string = this.router.snapshot.queryParams["curr"];

          connOk: string = "assets/picture/ok.png";
          connBad: string = "assets/picture/x.png";

          statisticalIndicatorTable: Total[];
          statisticalIndicatorChart: any[];

          statisticalVolume: any;
          totalVolume: any;
          totalVolumeLabel: any;
          totalVolumeData: any;
          totalVolumeOption: any;

          statisticalAmount: any;
          totalAmount: any;
          totalAmountLabel: any;
          totalAmountData: any;
          totalAmountOption: any;


          exchangeRate : any[];
          errorInformation : any[];

          //membersConnectionStatus
          connectionStatus: any;
          connectionStatusLabel: any;
          connectionStatusData: any;
          connectionStatusOption: any;
          disconnectedMember : any;
        
          //operational indicator
          businessDay : string = "Morning 2";
          timeExt : string = "30 Menit"

          //processing status
          processingSpeed : string = "0.052";
          processingSpeedStatus : string = "Normal";
  
          //surrounding status
          connHARTIS: boolean;
          connRTGS: boolean;
          connSOSA: boolean;
          connSKNBI: boolean;
          connETP: boolean;

          //server status
          dcStatus : boolean;
          drcStatus : boolean;
          replicationSpeed : any;

          //liquidity indicator
          queueInsufficientSecurities: any;
          queueInsufficientFund: any;
          maturitySecurities: any;
          couponPayment: any;


          
          interval_satu: any;
      
          cars: Car[];
      
          cars2: Car[];
      
          total: Total[];
      
          data: any;
      
          data2: any;
      
          data3: any;
      
          options: any = {
              legend: { position: 'bottom' }
            }
      
          constructor(public ConnectionService: ConnectionService, private router:ActivatedRoute) {}
      
          getData() {

            this.ConnectionService.getStatisticalIndicatorTable_SSSS(this.currParam).subscribe(
                data => {
                    this.statisticalIndicatorTable = data;
                }
            ),

            this.ConnectionService.getStatisticalVolume_SSSS(this.currParam).subscribe(
                data => {
                    this.statisticalVolume = data;
                    this.totalVolumeLabel = this.statisticalVolume.map(item => item.period)
                    this.totalVolumeData = this.statisticalVolume.map(item => item.volume)

                    this.totalVolume = {
                        labels: this.totalVolumeLabel,
                        
                        datasets: [
                            {
                                data: this.totalVolumeData,
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }]
                        },
                    this.totalVolumeOption = {
                        legend: {
                            display: false,
                              labels: {
                                display: false
                              }
                          },
                        maintainAspectRatio: true,
                        scales: {
                            xAxes: [{
                                ticks: {
                                    beginAtZero:true
                                }
                            }],
                            yAxes: [{
                                ticks: {
                                    display: false
                                }
                            }]
                        },
                        title: {
                            display: true,
                            text: 'Total Volume',
                            position: 'top'
                        }
                    }
                }
            ),

            this.ConnectionService.getStatisticalAmount_SSSS(this.currParam).subscribe(
                data => {
                    this.statisticalAmount = data;
                    this.totalAmountLabel = this.statisticalAmount.map(item => item.period)
                    this.totalAmountData = this.statisticalAmount.map(item => item.amount)

                    this.totalAmount = {
                        labels: this.totalAmountLabel,
                        datasets: [
                            {
                                data: this.totalAmountData,
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB",
                                    "#FFCE56"
                                ]
                            }]
                        };
                        this.totalAmountOption = {
                            legend: {
                                display: false,
                                  labels: {
                                    display: false
                                  }
                              },
                            maintainAspectRatio: true,
                            scales: {
                                xAxes: [{
                                    ticks: {
                                        beginAtZero:true
                                    }
                                }],
                                yAxes: [{
                                    ticks: {
                                        display: false
                                    }
                                }]
                            },
                            title: {
                                display: true,
                                text: 'Total Amount',
                                position: 'top'
                            }
                             
                        }
                }
            ),

            this.ConnectionService.getExchangeRate(this.currParam).subscribe(
                data => {
                    this.exchangeRate = data;
                }
            ),

            this.ConnectionService.getErrorInformation_SSSS(this.currParam).subscribe(
                data => {
                    this.errorInformation = data;
                }
            ),

            this.ConnectionService.getMembersConnectionStatus_SSSS(this.currParam).subscribe(
                data => {
                    this.connectionStatus = {
                        labels: ['Connected','Disconnected'],
                        datasets: [
                            {
                                data: [10, 2],
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB"
                                ],
                                hoverBackgroundColor: [
                                    "#FF6384",
                                    "#36A2EB"
                                ]
                            }]    
                        };
                    this.connectionStatusOption = {
                        legend: {
                            display: false,
                              labels: {
                                display: false
                              }
                          }
                    }
                }
                
            ),

            this.ConnectionService.getDisconnectedMember_SSSS(this.currParam).subscribe(
                data => {
                    this.disconnectedMember = data;
                }
            ),

            this.ConnectionService.getSurroundingStatus_SSSS(this.currParam).subscribe(
                data => {
                    this.connHARTIS = true;
                    this.connRTGS = false;
                    this.connSOSA = true;
                    this.connSKNBI = true;
                    this.connETP = true;
                }
            ),

            this.ConnectionService.getProcessingStatus_SSSS(this.currParam).subscribe(
                data => {
                    this.processingSpeed = "0.052";
                    this.processingSpeedStatus  = "Normal";
                }
            ),

            this.ConnectionService.getServerStatus_SSSS(this.currParam).subscribe(
                data => {
                    this.drcStatus = true;
                    this.dcStatus = true;
                    this.replicationSpeed = "00:11:01";
                }
            ),

            this.ConnectionService.getQueueInsufficientSecurities(this.currParam).subscribe(
                data => {
                    this.queueInsufficientSecurities = data;
                }
            ),

            this.ConnectionService.getQueueInsufficientFund(this.currParam).subscribe(
                data => {
                    this.queueInsufficientFund = data;
                }
            ),

            this.ConnectionService.getMaturitySecurities(this.currParam).subscribe(
                data => {
                    this.maturitySecurities = data;
                }
            ),

            this.ConnectionService.getCouponPayment(this.currParam).subscribe(
                data => {
                    this.couponPayment = data;
                }
            ),
                  
            this.ConnectionService.getDataSatu(this.currParam).subscribe(
                      data => {
                          this.cars = data;
                      }
                  )
                  
            this.ConnectionService.getDataDua(this.currParam).subscribe(
                      data => {
                          this.cars2 = data;
                      }
                  )
            this.ConnectionService.getDataTotal(this.currParam).subscribe(
                      data => {
                          this.total = data;
                      }
                  )

                  var z = ['A','B','C']
                  this.data3 = {
                      labels: z,
                      datasets: [
                          {
                              data: [300, 50, 100],
                              backgroundColor: [
                                  "#FF6384",
                                  "#36A2EB",
                                  "#FFCE56"
                              ],
                              hoverBackgroundColor: [
                                  "#FF6384",
                                  "#36A2EB",
                                  "#FFCE56"
                              ]
                          }]
                      };
          
          
                      var aB = ['Connected','Disconnected'];
                      this.data2 = {
                          labels: aB,
                          datasets: [
                              {
                                  data: [10, 2],
                                  backgroundColor: [
                                      "#FF6384",
                                      "#36A2EB"
                                  ],
                                  hoverBackgroundColor: [
                                      "#FF6384",
                                      "#36A2EB"
                                  ]
                              }]    
                          };
          }
      
          ngOnInit() {
              this.getData();
              this.interval_satu = setInterval(() => {
                  this.getData();
              },2500);
  
          }

}
