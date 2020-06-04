import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FbApiService } from '../../api/fb-api.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    public clientes: Array<any> = [];

    constructor(private api: FbApiService) {}

    ngOnInit() {
      this.api.getClientesAlex().subscribe((data) => {
        this.clientes = data.map((e) => {
          return { id: e.payload.doc.id, cliente: e.payload.doc.data() } as any;
        });
      });
    }
}
