import { BreadcrumbDTO } from "./BreadcrumbDTO";
import { Category } from "./category";
import { product } from "./product";

export class ProductDetailsDTO {
    rootCategory!   : Category;
    subCategory!    : Category;
    product!        : product;
    breadcrumbDTO: BreadcrumbDTO[] = [];
}
