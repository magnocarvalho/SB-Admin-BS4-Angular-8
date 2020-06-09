import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FbApiService } from '../../api/fb-api.service';
import { ExcelService } from '../../api/excel.service';

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
  public export_clientes: Array<any> = [];

  constructor(private api: FbApiService, private excel: ExcelService) {}

  ngOnInit() {
    this.api.getClientes().subscribe((data) => {
      this.export_clientes = data.map((e) => {
        return e.payload.doc.data();
      });
      this.clientes = data.map((e) => {
        return { id: e.payload.doc.id, cliente: e.payload.doc.data() } as any;
      });
    });
  }
  generaterExcel() {
    this.export_clientes.forEach((e) => {
      e.createat = new Date(e.createat.toDate());
      return e;
    });
    debugger;
    this.excel.exportAsExcelFile(this.export_clientes, 'clientes_poletize');
  }
}
