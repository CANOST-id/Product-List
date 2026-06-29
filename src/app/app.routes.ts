import { Routes } from '@angular/router';
import { ProductDetail } from './shared/components/product-detail/product-detail';
import { ProductList } from './shared/components/product-list/product-list';
import { Error404 } from './shared/components/error-404/error-404';


export const routes: Routes = [
    {path: "", component: ProductList},
    {path: "detail/:name", component: ProductDetail},
    {path: "**", component: Error404}
];
