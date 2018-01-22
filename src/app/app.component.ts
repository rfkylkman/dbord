import { Component } from '@angular/core';
import { Car } from 'app/domain/car';
import { Total } from 'app/domain/total';
import { ConnectionService} from 'app/services/ConnectionService';
import { Observable } from 'rxjs/Observable';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './dashboard-home.html',
  styleUrls: ['./app.component.css'],
  providers: [ConnectionService]
})
export class AppComponent {
    
   
}
