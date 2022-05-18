import { Component, OnInit } from '@angular/core';
import { StocksService } from 'src/app/stocks/web-services/stocks.service';
import { Stock } from '../../models/stock.model';

@Component({
  selector: 'app-stock',
  templateUrl: './stock.component.html',
  styleUrls: ['./stock.component.css']
})
export class StockComponent implements OnInit {

  stocks!: Stock[];

  constructor(private stocksService: StocksService) { }

  ngOnInit() {


    this.stocksService.getStocks().subscribe(
      (data: Stock[]) => {
        this.stocks = data;
      });
  }

  deleteStock(id: number) {
    this.stocksService.deleteStock(id).subscribe(res => {
      this.ngOnInit();
    });
  }
}
