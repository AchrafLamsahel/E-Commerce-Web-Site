import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/products/";

  //public getProductsPage(page: number, size: number): Observable<?> {
  //  return this.http.get<?>(`${this.backendHost}page/${page}/${size}`);
  //}

  
  
  //public getProductById(id:any){
  //  return this.http.get<?>(this.backendHost+"/client/product/"+ id)
  //}

}
