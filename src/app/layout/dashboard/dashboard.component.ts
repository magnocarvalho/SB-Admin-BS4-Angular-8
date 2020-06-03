import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FbApiService } from '../../api/fb-api.service';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss'],
  animations: [routerTransition()]
})
export class DashboardComponent implements OnInit {
  public alerts: Array<any> = [];
  public sliders: Array<any> = [];
  public clientes: Array<any> = [];

  constructor(private api: FbApiService) {}

  ngOnInit() {
    this.api.getClientes().subscribe((data) => {
      this.clientes = data.map((e) => {
        return { id: e.payload.doc.id, cliente: e.payload.doc.data() } as any;
      });
    });
  }
}
