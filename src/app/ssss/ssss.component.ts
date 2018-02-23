import { Component, ViewEncapsulation } from '@angular/core';
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
  styleUrls: ['./ssss.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class SsssComponent {

          currParam : string = this.router.snapshot.queryParams["curr"];

          connOk: string = "assets/picture/ok.png";
          connBad: string = "assets/picture/x.png";

          statisticalIndicatorTable: any[];
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
          connected: any;
          disconnected: any;
          disconnectedMemberTable : any;
        
          //operational indicator
          businessDay : string ;
          timeExt : string ;
          today : string ;

          //processing status
          processingSpeed : any;
          processingSpeedStatus : string;;
          processingSpeedColor: any ;
  
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
          queueInsufficientSecuritiesTotal: any;
          queueInsufficientSecuritiesCount: any;

          queueInsufficientFund: any;
          queueInsufficientFundTotal: any;
          queueInsufficientFundCount: any;

          maturitySecurities: any;
          maturitySecuritiesTotal: any;

          couponPayment: any;
          couponPaymentTotal: any;
         


          
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

            this.ConnectionService.getStatisticalVolume(this.currParam).subscribe(
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
                        },
                        animation: {
                            onComplete: function () {
                                var chartInstance = this.chart,
                                ctx = chartInstance.ctx;
                                ctx.textAlign = 'center';
                                ctx.textBaseline = 'bottom';
                                this.data.datasets.forEach(function (dataset, i) {
                                    var meta = chartInstance.controller.getDatasetMeta(i);
                                    meta.data.forEach(function (bar, index) {
                                        var data = dataset.data[index];
                                        ctx.fillText(data, bar._model.x + 14, bar._model.y + 8);
                                    });
                                });
                            }
                        }
                    }
                }
            ),

            this.ConnectionService.getStatisticalAmount(this.currParam).subscribe(
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
                            },
                            animation: {
                                onComplete: function () {
                                    var chartInstance = this.chart,
                                    ctx = chartInstance.ctx;
                                    ctx.textAlign = 'center';
                                    ctx.textBaseline = 'bottom';
                                    this.data.datasets.forEach(function (dataset, i) {
                                        var meta = chartInstance.controller.getDatasetMeta(i);
                                        meta.data.forEach(function (bar, index) {
                                            var data = dataset.data[index];
                                            ctx.fillText(data, bar._model.x + 14, bar._model.y + 8);
                                        });
                                    });
                                }
                            }
                             
                        }
                }
            ),

            this.ConnectionService.getExchangeRate().subscribe(
                data => {
                    this.exchangeRate = data;
                }
            ),

            this.ConnectionService.getErrorInformation_SSSS().subscribe(
                data => {
                    this.errorInformation = data;
                }
            ),

            this.ConnectionService.getOperationalIndicators_windowTime_SSSS().subscribe(
                data => {
                    this.businessDay = data
                }
            ),

            this.ConnectionService.getOperationalIndicators_extended_SSSS().subscribe(
                data => {
                    if (data == "0"){
                        this.timeExt = "-"
                    }
                    else{
                        this.timeExt = data;
                    }
                    
                }
            ),

            this.ConnectionService.getOperationalIndicators_today_SSSS().subscribe(
                data => {
                    this.today = data
                }
            ),

            this.ConnectionService.getMembersConnected_SSSS(this.currParam).subscribe(
                data => {
                    this.connected = data;
                }
            ),

            this.ConnectionService.getMembersDisconnected_SSSS(this.currParam).subscribe(
                data => {
                   //this.connected = data;
                    this.disconnected = data;      
                    
                    
                    this.connectionStatus = {
                        labels: ['Connected','Disconnected'],
                        datasets: [
                            {
                                data: [this.connected,this.disconnected],
                                backgroundColor: [
                                    "#FF6384",
                                    "#36A2EB"
                                ]
                            },
                            
                        ]    
                        };
                            this.connectionStatusOption = {
                                legend: {
                                    display: false,
                                    labels: {
                                        display: false
                                    }
                                }
                            };
                },
                
            ),
            
            this.ConnectionService.getDisconnectedMember_SSSS(this.currParam).subscribe(
                data => {
                    this.disconnectedMemberTable = data;
                }
            ),

            this.ConnectionService.getETPstatus().subscribe(
                data => {
                    this.connETP = data
                }
            ),

            this.ConnectionService.getHartisstatus_SSSS().subscribe(
                data => {
                    this.connHARTIS = data
                }
            ),

            this.ConnectionService.getBIsosastatus_SSSS().subscribe(
                data => {
                    this.connSOSA = data
                }
            ),

            this.ConnectionService.getSKNstatus_SSSS().subscribe(
                data => {
                    this.connSKNBI = data
                }
            ),

            this.ConnectionService.getRTGSstatus().subscribe(
                data => {
                    this.connRTGS = data
                }
            ),

            this.ConnectionService.getProcessingTime().subscribe(
                data => {
                    this.processingSpeed = data;
                    this.processingSpeed = this.processingSpeed + " ms";
                }
            ),

            this.ConnectionService.getProcessingStatus().subscribe(
                data => {
                    this.processingSpeedStatus = data;
                    if (this.processingSpeedStatus == "Normal")
                    {
                        this.processingSpeedColor = "#0cff85";
                    }
                    else{
                        this.processingSpeedColor = "#ff111d";
                    }
                }
            ),

            this.ConnectionService.getServerStatus(this.currParam).subscribe(
                data => {
                    this.dcStatus = true;
                    this.drcStatus = true;
                    this.replicationSpeed = "";
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
