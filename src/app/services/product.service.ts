import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { ThreeCategory } from '../entities/threeCategory';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
  constructor(private http: HttpClient) { }

  backendHost : string ="http://localhost:8085/categories/";

  public getProductsPageIndex(page: number, size: number): Observable<ThreeCategory> {
    return this.http.get<ThreeCategory>(`${this.backendHost}${page}/${size}`);
  }

  
  
  //public getProductById(id:any){
  //  return this.http.get<?>(this.backendHost+"/client/product/"+ id)
  //}

}
