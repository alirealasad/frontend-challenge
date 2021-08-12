import axios, { AxiosResponse } from "axios";
import { ProductsResponse, Product, ErrorResponse } from "types";

const apiUrl = "http://localhost:3000/api";

const responseBody = <T>(response: AxiosResponse<T>) => response.data;
const errorBody = <T>(error: ErrorResponse<T>) => error;

const requests = {
  get: <T>(url: string) => axios.get<T>(url).then(responseBody).catch<T>(errorBody),
};

const Products = {
  list: () => requests.get<ProductsResponse[]>(`${apiUrl}/products`),
  page: (page: number) => requests.get<ProductsResponse[]>(`${apiUrl}/products?page=${page}`),
  details: (gtin: number) => requests.get<Product>(`${apiUrl}/products/${gtin}`),
};

const agent = {
  Products,
};

export default agent;
