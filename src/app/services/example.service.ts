import { Injectable } from "@angular/core";
import { Observable } from "rxjs";
import { ExampleProducts, PaginationParams } from "../../types";
import { ApiService } from "./api.service";

@Injectable({
  providedIn: "root"
})
export class ExampleService {

  constructor(private apiService: ApiService) { }

  getExampleProducts = (url: string, params: PaginationParams): Observable<ExampleProducts> => {
    return this.apiService.get(url, {params, responseType: "json"});
  };
}
