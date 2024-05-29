import { product } from "./product";
export class PageRequestProductDTO {
    elements! : product[];
    currentPage! : number;
    totalPages! : number;
    totalElements! : number;
}