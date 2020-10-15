import {Component, OnInit} from '@angular/core';
import {Invoice} from '../../../models/Invoice';
import {InvoiceService} from '../../../service/InvoiceService';

@Component({
  selector: 'app-table',
  templateUrl: './table.component.html',
  styleUrls: ['./table.component.css']
})

export class TableComponent implements OnInit {

  public invoices: Invoice[];

  constructor(private service: InvoiceService) { }

  ngOnInit(): void {
    this.service.getInvoices().subscribe((invoices: Invoice[]) => {
      this.invoices = invoices;
      console.log(this.invoices);
    }, error => console.error(error));
  }
}
