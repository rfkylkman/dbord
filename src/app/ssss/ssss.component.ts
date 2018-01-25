import { Component } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
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
        

          businessDay : string = "Morning 2";
          timeExt : string = "30 Menit"
  

          connHARTIS: boolean;
          connRTGS: boolean;
          connSOSA: boolean;
          connSKNBI: boolean;
          connETP: boolean;


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
      
          options: any = {
              legend: { position: 'bottom' }
            }
      
          constructor(public ConnectionService: ConnectionService, private router:ActivatedRoute) {}
      
          getData() {
                  this.ConnectionService.getDataSatu(this.currParam).subscribe(
                      data => {
                          this.cars = data;
                      }
                  )
                  this.ConnectionService.getDataDua().subscribe(
                      data => {
                          this.cars2 = data;
                      }
                  )
                  this.ConnectionService.getDataTotal().subscribe(
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
