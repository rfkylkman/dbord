import { Component } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
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

          ip : any;
  
          connHARTIS: boolean;
          connSSSS: boolean;
          connSOSA: boolean;
          connSKNBI: boolean;
          connPVP: boolean;


          connOk: string = "assets/picture/ok.png";
          connBad: string = "assets/picture/x.png";
    
          interval_satu: any;
          
          selectedCar: Car;
          
          newCar: boolean;
      
          cars: Car[];
      
          cars2: Car[];
      
          total: Total[];
      
          data: any;
      
          data2: any;
      
          data3: any;

          data4: any[] = [];
          barChartLabels: string[] = [];
      
          options: any = {
              legend: { position: 'bottom' }
          }

          z: any[] = [];
          z1: any[] = [];
      
          constructor(private ConnectionService: ConnectionService, private router:ActivatedRoute) {}
          
          getData() {
                  this.ConnectionService.getDataSatu(this.currParam).subscribe(
                      data => {
                          this.cars = data;
                          this.z = this.cars.map(item => item.brand);
                          this.z1 = this.cars.map(item => item.year);
                      }
                      
                  ),
                  this.ConnectionService.getDataDua().subscribe(
                      data => {
                          this.cars2 = data;
                      }
                  ),
                  this.ConnectionService.getDataTotal().subscribe(
                      data => {
                          this.total = data;
                      }
                  )

                  this.connHARTIS = false;

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
                      };

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

          getIP() {
            this.ConnectionService.getIPaddress().subscribe(
              data => {
                this.ip = data;
              }
            )
          }

          
      
          ngOnInit() {
              this.getIP();
              this.getData();
              this.interval_satu = setInterval(() => {
                  this.getData();
              },2500);
              /*
              this.ConnectionService.getCarsSmall().then(cars => this.cars = cars);
              this.ConnectionService.getCarsSmaller().then(cars2 =>this.cars2 = cars2);
              */
          }
            
          
          
      }