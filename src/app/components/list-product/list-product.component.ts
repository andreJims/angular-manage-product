import {AfterViewInit, Component, ViewChild} from '@angular/core';
import {MatPaginator} from '@angular/material/paginator';
import {MatTableDataSource} from '@angular/material/table';
import {ProductModel} from '../../models/product.model';
import {ProductService} from '../../services/product.service';

@Component({
  selector: 'app-list-product',
  templateUrl: './list-product.component.html',
  styleUrls: ['./list-product.component.css']
})
export class ListProductComponent implements AfterViewInit {
  displayedColumns: string[] = ['code', 'name', 'validateDate', 'price'];
  dataSource = new MatTableDataSource<ProductModel>();
  queryString: string;
  // @ts-ignore
  @ViewChild(MatPaginator) paginator: MatPaginator;

  constructor(private productService: ProductService) {
  }

  ngAfterViewInit() {
    this.productService.findAll().subscribe(response => {
      this.dataSource.data = response;
    });
    this.dataSource.paginator = this.paginator;
  }

  search() {
    this.productService.search(this.queryString).subscribe(response => {
      this.dataSource.data = response;
    });
  }
}
