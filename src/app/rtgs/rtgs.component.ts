import { Component, ViewEncapsulation } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
import { currentQueue } from 'app/domain/currentQueue';
import { turnOverRatio } from 'app/domain/turnOverRatio';
import { intradayLiquidityFacility } from 'app/domain/intradayLiquidityFacility';
import { ConnectionService} from 'app/services/ConnectionService';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css'],
  encapsulation : ViewEncapsulation.None
})
export class RtgsComponent {

          currParam : string = this.router.snapshot.queryParams["curr"];

          ip : any;
          ip2 : any;

/*
          businessDay : string = "Morning 3";
          timeExt : string = "60 Menit"

          processingSpeed : string = "0.052";
          processingSpeedStatus : string = "Normal";
*/
          

          connOk: string = "assets/picture/ok.png";
          connBad: string = "assets/picture/x.png";
    
          interval_satu: any;
         
          newCar: boolean;
      
          cars: Car[];
      
          cars2: Car[];
      
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

          errorInformation : Total[];

          //operationalIndicator
          operationalIndicator: any;
          businessDay : string ;
          timeExt : string ;
          today : any ;
          
          //membersConnectionStatus
          connectionStatus: any;
          connectionStatusLabel: any;
          connectionStatusData: any;
          connectionStatusOption: any;
          connected: any;
          disconnected: any;
          disconnectedMemberTable : any;

          //surrounding status
          connHARTIS: boolean;
          connSSSS : boolean;
          connSOSA : boolean;
          connSKNBI : boolean;
          connPVP : boolean;
          
          //processing status
          processingSpeed : any;
          processingSpeedStatus : string;
          processingSpeedColor: any ;

          //server status
          activeSystem: any;
          dcStatus : boolean;
          drcStatus : boolean;
          replicationSpeed : any;

          //throughput
          throughputModel: any;
          throughput : any;
          throughputLabel: any;
          throughputDataBlock1: any;
          throughputDataBlock2: any;
          throughputDataBlock3: any;
          throughputDataBlock4: any;
          throughputDataBlock5: any;
          throughputChart: any;
          throughputOption: any;

          //current queue
          currentQueue : any;
          currentQueueParticipant: any;
          currentQueueTotal: any ;
          
          //turn over ratio
          turnOverModel : any;
          turnOverRatio : turnOverRatio[];
          turnOverRatioLabel: any;
          turnOverRatioData: any;
          turnOverRatioChart: any;

          //intraday
          intradayTable : any;
          intradayDetail: any;
          intradayParticipant: any;
          intradayTotal1 : any;
          intradayTotal2: any;
          

          data: any;
          dataOption: any;
      
          data2: any;
      
          data3: any;

          data4: any[] = [];
          barChartLabels: string[] = [];

          total: any;

          data5: any[] = [];
      
          options: any = {
              legend: { position: 'bottom' }
          }

          z: any[] = [];
          z1: any[] = [];
      
          constructor(private ConnectionService: ConnectionService, private router:ActivatedRoute) {}
          
          getData() {
            
            this.ConnectionService.getStatisticalIndicatorTable(this.currParam).subscribe(
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

            this.ConnectionService.getErrorInformation(this.currParam).subscribe(
                data => {
                    this.errorInformation = data;
                }
            ),

            this.ConnectionService.getOperationalIndicators_windowTime().subscribe(
                data => {
                    this.businessDay = data
                }
            ),

            this.ConnectionService.getOperationalIndicators_extended().subscribe(
                data => {
                    if (data == "0"){
                        this.timeExt = "-"
                    }
                    else{
                        this.timeExt = data;
                    }
                    
                }
            ),

            this.ConnectionService.getOperationalIndicators_today().subscribe(
                data => {
                    this.today = data
                }
            ),

            this.ConnectionService.getMembersConnected(this.currParam).subscribe(
                data => {
                    this.connected = data;
                }
            ),

            this.ConnectionService.getMembersDisconnected(this.currParam).subscribe(
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
            
            this.ConnectionService.getDisconnectedMember(this.currParam).subscribe(
                data => {
                    this.disconnectedMemberTable = data;
                }
            ),

            this.ConnectionService.getPvpStatus().subscribe(
                data => {
                    this.connPVP = data
                }
            ),

            this.ConnectionService.getPvpStatus().subscribe(
                data => {
                    this.connPVP = data
                }
            ),

            this.ConnectionService.getHartisstatus().subscribe(
                data => {
                    this.connHARTIS = data
                }
            ),

            this.ConnectionService.getBIsosastatus().subscribe(
                data => {
                    this.connSOSA = data
                }
            ),

            this.ConnectionService.getSKNstatus().subscribe(
                data => {
                    this.connSKNBI = data
                }
            ),

            this.ConnectionService.getS4status().subscribe(
                data => {
                    this.connSSSS = data
                }
            ),

            this.ConnectionService.getProcessingTime().subscribe(
                data => {
                    this.processingSpeed = data;
                    /*
                    if(this.processingSpeed >= 300)
                    {
                        this.processingSpeedStatus = "Slow";
                        this.processingSpeedColor = "#ff111d";
                    }
                    else{
                        this.processingSpeedStatus = "Normal";
                        this.processingSpeedColor = "#0cff85";
                    }
                    */
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

            this.ConnectionService.getThroughput(this.currParam).subscribe(
                data => {
                    this.throughput = data;
                    this.throughputLabel = this.throughput.map(item => item.Periode);
                    this.throughputDataBlock1 = this.throughput.map(item => item.block1);
                    this.throughputDataBlock2 = this.throughput.map(item => item.block2);
                    this.throughputDataBlock3 = this.throughput.map(item => item.block3);
                    this.throughputDataBlock4 = this.throughput.map(item => item.block4);
                    this.throughputDataBlock5 = this.throughput.map(item => item.block5);
                    
                    

                    this.throughputChart = {
                        labels: this.throughputLabel,
                        datasets: [
                            {
                                data: this.throughputDataBlock1,
                                backgroundColor: [
                                    "#FFCE56",
                                    "#FFCE56",
                                    "#FFCE56"
                                ]
                            },
                            {
                                data: this.throughputDataBlock2,
                                backgroundColor: [
                                    "#42A5F5",
                                    "#42A5F5",
                                    "#42A5F5"
                                ]
                            },
                            {
                                data: this.throughputDataBlock3,
                                backgroundColor: [
                                    "#FF6384",
                                    "#FF6384",
                                    "#FF6384"
                                ]
                            },
                            {
                                data: this.throughputDataBlock4,
                                backgroundColor: [
                                    "red",
                                    "red",
                                    "red"
                                ]
                            },
                            {
                                data: this.throughputDataBlock5,
                                backgroundColor: [
                                    "green",
                                    "green",
                                    "green"
                                ]
                            }
                        
                        ]
                        };
                    this.throughputOption = {
                        scales: {
                                xAxes: [{
                                    stacked: true
                                }],
                                yAxes: [{
                                    stacked: true
                                }]
                            },
                        legend: {
                                display: false,
                                  labels: {
                                    display: false
                                  }
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
                                            ctx.fillText(data + "%", bar._model.x - 14, bar._model.y + 8);
                                        });
                                    });
                                }
                            }     
                        
                        }
                }
            ),

            

            this.ConnectionService.getCurrentQueueTable(this.currParam).subscribe(
                data => {
                    this.currentQueue = data;
                }
            ),

            this.ConnectionService.getCurrentQueueParticipant(this.currParam).subscribe(
                data => {
                    this.currentQueueParticipant = data;
                }
            ),

            this.ConnectionService.getCurrentQueueTotal(this.currParam).subscribe(
                data => {
                    this.currentQueueTotal = data;
                }
            ),

            this.ConnectionService.getTurnOverRatio(this.currParam).subscribe(
                data => {
                    this.turnOverRatio = data;
                }
            ),

            this.ConnectionService.getIntradayTable(this.currParam).subscribe(
                data => {
                    this.intradayTable = data;
                }
            ),

            this.ConnectionService.getIntradayParticipant(this.currParam).subscribe(
                data => {
                    this.intradayParticipant = data
                }
            ),

            this.ConnectionService.getIntradayActiveTotal(this.currParam).subscribe(
                data => {
                    this.intradayTotal1 = data
                }
            ),

            this.ConnectionService.getIntradayPaidTotal(this.currParam).subscribe(
                data => {
                    this.intradayTotal2 = data
                }
            ),


                    
            
            this.ConnectionService.getDataDua(this.currParam).subscribe(
                data => {
                          this.cars2 = data;
                      }
                  ),
            this.ConnectionService.getDataTotal(this.currParam).subscribe(
                data => {
                          this.total = data;
                      }
                  )


                    var a = ['A','B','C','D'];
                        this.data = {
                          labels: a,
                          datasets: [
                              {
                                  label: '.',
                                  backgroundColor: '#FFCE56',
                                  borderColor: '#FFCE58',
                                  data: [28, 48, 40, 19, 86, 27, 90]
                              },
                              {
                                  label: '.',
                                  backgroundColor: '#42A5F5',
                                  borderColor: '#1E88E5',
                                  data: [65, 59, 80, 81, 56, 55, 40]
                              },
                              
                              {
                                label: '.',
                                backgroundColor: '#FF6384',
                                borderColor: '#FF6386',
                                data: [28, 48, 40, 19, 86, 27, 90]
                            }
                          ]
                        };

          }

          ngOnInit() {
              //this.getIP();
              this.getData();
              this.interval_satu = setInterval(() => {
                  this.getData();
              },7500);
          }
            
          
          
      }