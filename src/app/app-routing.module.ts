import {NgModule} from '@angular/core';
import {Routes, RouterModule} from '@angular/router';
import {ListProductComponent} from './components/list-product/list-product.component';
import {AddProductComponent} from './components/add-product/add-product.component';

const routes: Routes =
  [
    {
      path: '',
      component: ListProductComponent
    },
    {
      path: 'product/create',
      component: AddProductComponent
    }
  ];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {
}
