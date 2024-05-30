import { BreadcrumbDTO } from "./BreadcrumbDTO";
import { Category } from "./category";
import { product } from "./product";

export class CategoryPageDTO {
    rootCategory!   : Category;
    subCategories!  : Category[];
    products!       : product[];
    breadcrumbDTO  : BreadcrumbDTO[] = [];
}
