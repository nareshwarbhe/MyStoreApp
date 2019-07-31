import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { UserMaster } from '../Models/user-master';
import { Observable } from 'rxjs';
import { Country } from '../Models/country';
import { ProductCategory } from '../Models/productcategory';
@Injectable({
  providedIn: 'root'
})
export class UtilityService {

  url = "http://localhost:9090/api/";
  constructor(private httpClient: HttpClient) { }
  getProducts() {
    return this.httpClient.get(this.url + "Products/GetProductsData");
  }
  getProductCategories() {
    return this.httpClient.get("http://localhost:9090/api/ProductCategories/GetProductCategories");
  }
  createUser(user: UserMaster): Observable<UserMaster> {
    return this.httpClient.post<UserMaster>(this.url + "UserMasters/PostUserMaster", user);
  }
  updateUser(user: UserMaster): Observable<UserMaster> {
    return this.httpClient.post<UserMaster>(this.url + "UserMasters/PutUserMaster", user);
  }
  getCountries() {
    return this.httpClient.get(this.url + "Common/GetContries");
  }
  // getUsers(): Observable<UserMaster[]> {
  //   return this.httpClient.get<UserMaster[]>(this.url + "UserMasters/GetUserMasters");
  //   //return this.httpClient.get(this.url).map + "UserMasters/GetUserMasters");
  // }
  getUsers() {
    return this.httpClient.get(this.url + "UserMasters/GetUserMasters");
    //return this.httpClient.get(this.url).map + "UserMasters/GetUserMasters");
  }
}
