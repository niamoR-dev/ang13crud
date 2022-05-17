import { Component, OnInit } from '@angular/core';
import { Stock } from 'src/app/core/model/stock.model';
import { StocksService } from 'src/app/core/web-services/stocks.service';

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
