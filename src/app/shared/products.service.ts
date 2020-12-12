import {Injectable} from '@angular/core';
import {HttpClient, HttpParams} from '@angular/common/http';
import {Product} from '../model/product';
import {Observable} from 'rxjs';
import {Category} from '../site-framework/category';

@Injectable({
  providedIn: 'root'
})
export class ProductsService {

  private products: Product [];
  link = 'http://localhost:3000/products';

  constructor(private httpClient: HttpClient) {
  }

  getAllProducts(): Observable<Product> {
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.get<Product>(productUrl); // return an observable  ////
  }

  getCategories(): Observable<Category>{
    const categoriesUrl = 'http://localhost:3000/categories'; // rech par cat
    return this.httpClient.get<Category>(categoriesUrl);
  }



  createProduct(productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products';

    return this.httpClient.post<Product>(productUrl, productBody); // return an observable
  }

  viewProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/'+ productId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  updateProduct(productId, productBody): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.put<Product>(productUrl, productBody); // return an observable
  }

  deleteProduct(productId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/' + productId;
    return this.httpClient.delete<Product>(productUrl); // return an observable
  }

  searchCategoryProducts(categoryId): Observable<Product>{
    const productUrl = 'http://localhost:3000/products?categoryId='+categoryId;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  searchDateProducts(dateParam): Observable<Product>{
    const productUrl = 'http://localhost:3000/products/date='+dateParam;
    return this.httpClient.get<Product>(productUrl); // return an observable
  }

  findByName(productName): Observable<Product[]> {
    //const productUrl = 'http://localhost:3000/products';
    const filter = '{"where":{ "productName":{"like":"%${productName}%"}}}';
    const params = new HttpParams().set('filtre',filter);
    return this.httpClient.get<Product []>(this.link, {params} );
  }
}






