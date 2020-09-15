import {Injectable} from '@angular/core';
import {HttpClient} from '@angular/common/http';
import {Observable} from 'rxjs';
import {ApiUrl} from '../utils/api-url';
import {ProductModel} from '../models/product.model';

@Injectable()
export class ProductService {

  constructor(
    private httpClient: HttpClient
  ) {

  }

  findAll(): Observable<any> {
    return this.httpClient.get<any>(ApiUrl.URL_PRODUCT);
  }

  create(product: any): Observable<any> {
    return this.httpClient.post<any>(ApiUrl.URL_PRODUCT, product);
  }

  search(queryString: string): Observable<any> {
    return this.httpClient.get<any>(ApiUrl.URL_SEARCH_PRODUCT + '/?query=' + queryString);
  }

  findByCode(queryString: string): Observable<any> {
    return this.httpClient.get<any>(ApiUrl.URL_FIND_PRODUCT_BY_CODE + '/?q=' + queryString);
  }

  findByName(queryString: string): Observable<any> {
    return this.httpClient.get<any>(ApiUrl.URL_FIND_PRODUCT_BY_NAME + '/?q=' + queryString);
  }
}
