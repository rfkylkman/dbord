import { Component, ViewEncapsulation } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
import { exchangeRate } from 'app/domain/exchangeRate';
import { errorCode } from 'app/domain/errorCode';
import { ConnectionServiceSSSS} from 'app/services/ConnectionServiceSSSS';
import { config } from 'app/services/config';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-ssss',
  templateUrl: './ssss.component.html',
  styleUrls: ['./ssss.component.css'],
  providers:[config, ConnectionServiceSSSS],
  encapsulation : ViewEncapsulation.None
})
export class SsssComponent {

          currParam : string = this.router.snapshot.queryParams["curr"];

          ip : any = window.location.hostname;

          connOk: string = "assets/picture/ok.png";
          connBad: string = "assets/picture/x.png";

          statisticalIndicatorTable: any[];
          statisticalIndicatorChart: any[];

          totalAmountToday: any;
          totalAmountPrevDay: any;
          totalAmountPrevWeek: any;
          totalVolumeToday: any;
          totalVolumePrevDay: any;
          totalVolumePrevWeek: any;

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
          activeSystem: any;
          dcStatus : boolean;
          drcStatus : boolean;
          replicationTime : any;

          //liquidity indicator
          queueInsufficientSecurities: any;
          queueInsufficientSecuritiesTotal: any;
          queueInsufficientSecuritiesMember: any;

          queueInsufficientFund: any;
          queueInsufficientFundTotal: any;
          queueInsufficientFundMember: any;

          maturitySecurities: any;
          maturitySecuritiesTotal: any;

          couponPayment: any;
          couponPaymentTotal: any;
         


          
          interval_satu: any;

          data: any;
      
          data2: any;
      
          data3: any;
      
          options: any = {
              legend: { position: 'bottom' }
            }
      
          constructor(public ConnectionService: ConnectionServiceSSSS, private config: config, private router:ActivatedRoute) {}
      
          getData() {

            this.ConnectionService.getStatisticalIndicatorTable_SSSS(this.currParam).subscribe(
                data => {
                    this.statisticalIndicatorTable = data;
        
                }
            ),

            this.ConnectionService.getTotalAmountToday(this.currParam).subscribe(
                data => {
                    this.totalAmountToday = Math.round(data /1000000000);
                }
            ),
            this.ConnectionService.getTotalAmountPrevDay(this.currParam).subscribe(
                data => {
                    this.totalAmountPrevDay = Math.round(data /1000000000);
                }
            ),
            this.ConnectionService.getTotalAmountPrevWeek(this.currParam).subscribe(
                data => {
                    this.totalAmountPrevWeek = Math.round(data /1000000000);
                }
            ),

            this.ConnectionService.getTotalVolumeToday(this.currParam).subscribe(
                data => {
                    this.totalVolumeToday = data ;
                }
            ),
            this.ConnectionService.getTotalVolumePrevDay(this.currParam).subscribe(
                data => {
                    this.totalVolumePrevDay = data;
                }
            ),
            this.ConnectionService.getTotalVolumePrevWeek(this.currParam).subscribe(
                data => {
                    this.totalVolumePrevWeek = data;
                }
            ),

            ///////////////////
            this.totalVolume = {
                labels: ["Today","Previous Day","Previous Week"],
                datasets: [
                    {
                        backgroundColor: ['#FFCE56','#42A5F5','#FF6384'],
                        data: [this.totalVolumeToday,this.totalVolumePrevDay,this.totalVolumePrevWeek]
                    }
                ]
            }

            this.totalVolumeOption = {
                legend: {
                    display: false,
                      labels: {
                        display: true
                      }
                  },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            display: true,
                            fontSize: 11
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
                        ctx.font = "12px Calibri";
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

            this.totalAmount = {
                labels: ["Today","Previous Day","Previous Week"],
                datasets: [
                    {
                        backgroundColor: ['#FFCE56','#42A5F5','#FF6384'],
                        data: [this.totalAmountToday,this.totalAmountPrevDay,this.totalAmountPrevWeek]
                    }
                ]
            }

            this.totalAmountOption = {
                legend: {
                    display: false,
                      labels: {
                        display: true
                      }
                  },
                maintainAspectRatio: false,
                scales: {
                    xAxes: [{
                        ticks: {
                            beginAtZero:true
                        }
                    }],
                    yAxes: [{
                        ticks: {
                            display: true,
                            fontSize: 11
                            
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
                        ctx.textBaseline = 'middle';
                        ctx.font = "12px Calibri";
                        this.data.datasets.forEach(function (dataset, i) {
                            var meta = chartInstance.controller.getDatasetMeta(i);
                            meta.data.forEach(function (bar, index) {
                                var data = dataset.data[index];
                                ctx.fillText(data, bar._model.x + 19, bar._model.y + 0);
                            });
                        });
                    }
                }
                 
            }

          

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

            this.ConnectionService.getProcessingTime_SSSS().subscribe(
                data => {
                    this.processingSpeed = data;
                    this.processingSpeed = this.processingSpeed + " ms";
                }
            ),

            this.ConnectionService.getProcessingStatus_SSSS().subscribe(
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

            this.ConnectionService.getDcStatus().subscribe(
                data => {
                    this.dcStatus = data;
                }
            ),

            this.ConnectionService.getDrcStatus().subscribe(
                data => {
                    this.drcStatus = data;
                }
            ),

            this.ConnectionService.getActiveSystem().subscribe(
                data => {
                    this.activeSystem = data;
                }
            ),

            this.ConnectionService.getReplicationTime().subscribe(
                data => {
                    this.replicationTime = data;
                }
            ),

            this.ConnectionService.getQueueInsufficientSecurities(this.currParam).subscribe(
                data => {
                    this.queueInsufficientSecurities = data;
                }
            ),

            this.ConnectionService.getQueueInsufficientSecuritiesMember(this.currParam).subscribe(
                data => {
                    this.queueInsufficientSecuritiesMember = data;
                }
            ),

            this.ConnectionService.getQueueInsufficientSecuritiesTotal(this.currParam).subscribe(
                data => {
                    this.queueInsufficientSecuritiesTotal = data;
                }
            ),

            this.ConnectionService.getQueueInsufficientFund(this.currParam).subscribe(
                data => {
                    this.queueInsufficientFund = data;
                }
            ),

            this.ConnectionService.getQueueInsufficientFundMember(this.currParam).subscribe(
                data => {
                    this.queueInsufficientFundMember = data;
                }
            ),

            this.ConnectionService.getQueueInsufficientFundTotal(this.currParam).subscribe(
                data => {
                    this.queueInsufficientFundTotal = data;
                }
            ),

            this.ConnectionService.getMaturitySecurities().subscribe(
                data => {
                    this.maturitySecurities = data;
                }
            ),

            this.ConnectionService.getMaturitySecuritiesTotal().subscribe(
                data => {
                    this.maturitySecuritiesTotal = data;
                }
            ),

            this.ConnectionService.getCouponPayment().subscribe(
                data => {
                    this.couponPayment = data;
                }
            ),

            this.ConnectionService.getCouponPaymentTotal().subscribe(
                data => {
                    this.couponPaymentTotal = data;
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
          }

          ngAfterContentInit(){
            this.interval_satu = setInterval(() => {
                this.getData();
            },10000);
          }      

}
