import { Component, ViewEncapsulation    } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
import { currentQueue } from 'app/domain/currentQueue';
import { turnOverRatio } from 'app/domain/turnOverRatio';
import { intradayLiquidityFacility } from 'app/domain/intradayLiquidityFacility';
import { ConnectionService} from 'app/services/ConnectionService';
import { config } from 'app/services/config';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/operator/map';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css'],
  providers:[config, ConnectionService],
  encapsulation : ViewEncapsulation.None
})
export class RtgsComponent {

          currParam : string = this.router.snapshot.queryParams["curr"];

          ip : any;
          

          connOk: string = "assets/picture/ok.png";
          connBad: string = "assets/picture/x.png";
    
          interval_satu: any;
         
          newCar: boolean;

      
          statisticalIndicatorTable: any;

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

          errorInformation : any;

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
          replicationTime : any;

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
          turnOverRatio : any;
          turnOverRatioLabel: any;
          turnOverToday: any;
          turnOverPDay: any;
          turnOverPWeek: any;
          turnOverRatioData: any;
          turnOverRatioChart: any;

          //intraday
          intradayTable : any;
          intradayDetail: any;
          intradayParticipant: any;
          intradayTotal1 : any;
          intradayTotal2: any;
          


      
          options: any = {
              legend: { position: 'bottom' }
          }

      
          constructor(private ConnectionService: ConnectionService, private router:ActivatedRoute, private config: config) {}
          
          getDataStatisticalIndicator() {
            
            this.ConnectionService.getStatisticalIndicatorTable(this.currParam).subscribe(
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
                    this.totalAmountPrevDay = Math.round(data /1000000000)
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
                }
            )
          }

          getErrorInfo(){
            this.ConnectionService.getErrorInformation(this.currParam).subscribe(
                data => {
                    this.errorInformation = data;
                }
            )
          }

          getOperationalInfo(){
            this.ConnectionService.getOperationalIndicators_windowTime().subscribe(
                data => {
                    this.businessDay = data
                }
            ),

            this.ConnectionService.getOperationalIndicators_extended().subscribe(
                data => {
                    if (data == ""){
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
            )   
          }

          getSurroundingStatus(){
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
            )

          }

          getThroughput(){
            this.ConnectionService.getThroughput(this.currParam).subscribe(
                data => {
                    this.throughput = data;
                    this.throughputLabel = this.throughput.map(item => item.periode);
                    this.throughputDataBlock1 = this.throughput.map(item => item.block1);
                    this.throughputDataBlock2 = this.throughput.map(item => item.block2);
                    this.throughputDataBlock3 = this.throughput.map(item => item.block3);
                    this.throughputDataBlock4 = this.throughput.map(item => item.block4);
                    this.throughputDataBlock5 = this.throughput.map(item => item.block5);

                    var ticks = [0,30,60,100];
                    
                    

                    this.throughputChart = {
                        labels: this.throughputLabel,
                        datasets: [
                            {
                                data: this.throughputDataBlock1,
                                backgroundColor: "#FFCE56"
                            },
                            {
                                data: this.throughputDataBlock2,
                                backgroundColor: "#42A5F5"
                            },
                            {
                                data: this.throughputDataBlock3,
                                backgroundColor: "#FF6384"
                            },
                            {
                                data: this.throughputDataBlock4,
                                backgroundColor: "red"
                            },
                            {
                                data: this.throughputDataBlock5,
                                backgroundColor: "green"
                            }
                        
                        ]
                        };

                    this.throughputOption = {
                        scales: {
                                xAxes: [{
                                    stacked: true,
                                    ticks: {
                                        min: ticks[0],
                                        max: ticks[ticks.length-1],
                                        stepSize:30
                                    },
                                    afterBuildTicks: function(scale) {
                                        scale.ticks = ticks;
                                        return;
                                      },
                                      beforeUpdate: function(oScale) {
                                        return;
                                      }
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
                            }
                        /*,
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
                        */
                        }
                        
                }
            )
          }

          getCurrentQueue(){
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
            )
          }

          getTurnOverRatio(){
            this.ConnectionService.getTurnOverRatio(this.currParam).subscribe(
                data => {
                    this.turnOverRatio = data;
                    this.turnOverRatioLabel = this.turnOverRatio.map(item => item.className);
                    this.turnOverToday= this.turnOverRatio.map(item => item.TD);
                    this.turnOverPDay = this.turnOverRatio.map(item => item.PD);
                    this.turnOverPWeek = this.turnOverRatio.map(item => item.PW);

                    this.turnOverRatioChart = {
                        labels: this.turnOverRatioLabel,
                        datasets:   [
                                {
                                    data: this.turnOverToday,
                                    label: "Today",
                                    backgroundColor: "#FFCE56"
                                },
                                {
                                    data: this.turnOverPDay,
                                    label: "Previous Day",
                                    backgroundColor: "#42A5F5"
                                },
                                {
                                    data: this.turnOverPWeek,
                                    label: "Previous Week",
                                    backgroundColor: "#FF6384"
                                }
                            
                            ]
                        };
                }
            )
              
          }

          getILF(){
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
            )
          }

          ngOnInit() {
              this.getDataStatisticalIndicator();
              this.getErrorInfo();
              this.getOperationalInfo();
              this.getSurroundingStatus();
              this.getThroughput();
              this.getCurrentQueue();
              this.getTurnOverRatio();
              this.getILF();
              this.interval_satu = setInterval(() => {
                this.getOperationalInfo();
            },20000);

          }


          ngOnDestroy(){
              clearInterval(this.interval_satu);
          }
          
          
      }