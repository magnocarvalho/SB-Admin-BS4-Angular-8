import { Component, OnInit } from '@angular/core';
import { routerTransition } from '../../router.animations';
import { FbApiService } from '../../api/fb-api.service';
import { ExcelService } from '../../api/excel.service';

@Component({
    selector: 'app-tables',
    templateUrl: './tables.component.html',
    styleUrls: ['./tables.component.scss'],
    animations: [routerTransition()]
})
export class TablesComponent implements OnInit {
    public clientes: Array<any> = [];
    public export_clientes: Array<any> = [];

    constructor(private api: FbApiService, private excel: ExcelService) {}

    ngOnInit() {
        this.api.getClientesAlex().subscribe((data) => {
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
            e.dataReivindicacao = new Date(e.dataReivindicacao.toDate());
            e.tipo = this.tipoDeContato(e.tipo)
            return e;
        });
        debugger;
        this.excel.exportAsExcelFile(this.export_clientes, 'clientes_alex');
    }
    tipoDeContato(t) {
        switch (t) {
            case 1:
                return 'Reclamação';
            case 2:
                return 'Elogio';
            case 3:
                return 'Sugestão';
            case 4:
                return 'Denúncia';
            case 5:
                return 'Contato';
            case 6:
                return 'Solicitação';
        }
    }
}
