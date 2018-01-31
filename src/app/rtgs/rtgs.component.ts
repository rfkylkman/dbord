import { Component } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
import { currentQueue } from 'app/domain/currentQueue';
import { turnOverRatio } from 'app/domain/turnOverRatio';
import { intradayLiquidityFacility } from 'app/domain/intradayLiquidityFacility';
import { ConnectionService} from 'app/services/ConnectionService';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-rtgs',
  templateUrl: './rtgs.component.html',
  styleUrls: ['./rtgs.component.css']
})
export class RtgsComponent {

          currParam : string = this.router.snapshot.queryParams["curr"];

          ip : any = window.location.hostname;

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
          statisticalIndicatorChart: Total[];
          totalVolume: any;
          totalAmount: any;

          errorInformation : Total[];
          currentQueue : currentQueue[];
          turnOverRatio : turnOverRatio[];

          intradayLiquidityFacility : intradayLiquidityFacility[];

          //operationalIndicator
          businessDay : string = "Morning 3";
          timeExt : string = "60 Menit"
          
          membersConnectionStatus : any;
          disconnectedMember : any;

          //surrounding status
          connHARTIS: boolean;
          connSSSS : boolean;
          connSOSA : boolean;
          connSKNBI : boolean;
          connPVP : boolean;
          
          //processing status
          processingSpeed : string = "0.052";
          processingSpeedStatus : string = "Normal";

          //server status
          dcStatus : boolean;
          drcStatus : boolean;
          replicationSpeed : any;

          throughput : any;

          data: any;
      
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

            this.ConnectionService.getStatisticalIndicatorChart(this.currParam).subscribe(
                data => {
                    this.statisticalIndicatorChart = data;
                    this.z = this.statisticalIndicatorChart.map(item => item.summary)
                    this.z1 = this.statisticalIndicatorChart.map(item => item.amount)

                    this.data3 = {
                        labels: this.z,
                        datasets: [
                            {
                                data: this.z1,
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
                        }
                }
            ),

            this.ConnectionService.getErrorInformation(this.currParam).subscribe(
                data => {
                    this.errorInformation = data;
                }
            ),

            this.ConnectionService.getOperationalIndicators(this.currParam).subscribe(
                data => {
                    this.businessDay = "Morning 3";
                    this.timeExt = "60 Menit";
                }
            ),

            this.ConnectionService.getMembersConnectionStatus(this.currParam).subscribe(
                data => {
                    this.membersConnectionStatus = data;
                }
            ),

            this.ConnectionService.getDisconnectedMember(this.currParam).subscribe(
                data => {
                    this.disconnectedMember = data;
                }
            ),

            this.ConnectionService.getSurroundingStatus(this.currParam).subscribe(
                data => {
                    this.connHARTIS = true;
                    this.connPVP = true;
                    this.connSKNBI = true;
                    this.connSOSA = true;
                    this.connSSSS = true;
                }
            ),

            this.ConnectionService.getProcessingStatus(this.currParam).subscribe(
                data => {
                    this.processingSpeed = "0.052";
                    this.processingSpeedStatus = "Normal";
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
                }
            ),

            this.ConnectionService.getCurrentQueue(this.currParam).subscribe(
                data => {
                    this.currentQueue = data;
                }
            ),

            this.ConnectionService.getTurnOverRatio(this.currParam).subscribe(
                data => {
                    this.turnOverRatio = data;
                }
            ),

            this.ConnectionService.getIntradayLiquidityFacility(this.currParam).subscribe(
                data => {
                    this.intradayLiquidityFacility = data;
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

                  this.connHARTIS = false;

                  

                      var a = ['A','B','C','D','E','F','G'];
                      this.data = {
                          labels: a,
                          datasets: [
                              {
                                  label: '.',
                                  backgroundColor: '#42A5F5',
                                  borderColor: '#1E88E5',
                                  data: [65, 59, 80, 81, 56, 55, 40]
                              },
                              {
                                  label: '.',
                                  backgroundColor: '#9CCC65',
                                  borderColor: '#7CB342',
                                  data: [28, 48, 40, 19, 86, 27, 90]
                              }
                          ]  
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

          /*getIP() {
            this.ConnectionService.getIPaddress().subscribe(
              data => {
                this.ip = data;
                this.ip = window.location.hostname;
              }
            )
          } */

          
      
          ngOnInit() {
              //this.getIP();
              this.getData();
              this.interval_satu = setInterval(() => {
                  this.getData();
              },7500);
              /*
              this.ConnectionService.getCarsSmall().then(cars => this.cars = cars);
              this.ConnectionService.getCarsSmaller().then(cars2 =>this.cars2 = cars2);
              */
          }
            
          
          
      }