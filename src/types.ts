import { HttpContext, HttpHeaders, HttpParams } from "@angular/common/http";

export interface Options {
  headers?: HttpHeaders | Record<string, string | string[]>;
  observe?: "body";
  context?: HttpContext;
  params?:
    | HttpParams
    | Record<
        string,
        string | number | boolean | readonly (string | number | boolean)[]
      >;
  reportProgress?: boolean;
  responseType?: "json";
  withCredentials?: boolean;
  transferCache?:
    | {
        includeHeaders?: string[];
      }
    | boolean;
}

export interface ExampleProducts {
  items: ExampleProduct[];
  total: number;
  page: number;
  perPage: number;
  totalPages: number;
}

export interface ExampleProduct {
  id: string;
  name: string;
  image: string;
  price: string;
  rating: number;
}

export interface PaginationParams {
  [param: string]:
    | string
    | number
    | boolean
    | readonly (string | number | boolean)[];
  page: number;
  perPage: number;
}
