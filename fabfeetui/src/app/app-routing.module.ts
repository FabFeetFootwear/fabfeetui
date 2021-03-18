import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ContactComponent } from './contact/contact.component';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';

import { DashboardComponent } from './dashboard/dashboard.component';
import { DeleteOrdersComponent } from './delete-orders/delete-orders.component';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { ForgotComponent } from './forgot/forgot.component';
import { HelpComponent } from './help/help.component';
import { LoginComponent } from './login/login.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { RetrieveOrdersComponent } from './retrieve-orders/retrieve-orders.component';
import { ShowproductComponent } from './showproduct/showproduct.component';

import { SignupComponent } from './signup/signup.component';
import { StoreOrdersComponent } from './store-orders/store-orders.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { UploadproductComponent } from './uploadproduct/uploadproduct.component';
import { CategoryretrieveComponent } from './categoryretrieve/categoryretrieve.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { CategorydeleteComponent } from './categorydelete/categorydelete.component';
import {SupplierretrieveComponent} from './supplierretrieve/supplierretrieve.component';
import { SupplierupdateComponent } from './supplierupdate/supplierupdate.component';
import { SupplierdeleteComponent } from './supplierdelete/supplierdelete.component';
import { CategorystoreComponent } from './categorystore/categorystore.component';
import { SupplierstoreComponent } from './supplierstore/supplierstore.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { StoreCourrierComponent } from './store-courrier/store-courrier.component';
import { RetrieveCourrierComponent} from './retrieve-courrier/retrieve-courrier.component';
import { DeleteCourrierComponent } from './delete-courrier/delete-courrier.component';
    
import {​​​​​ UpdateCourrierComponent }​​​​​ from'./update-courrier/update-courrier.component';
import { RetrieveCustomerComponent } from './retrieve-customer/retrieve-customer.component';

    
import {​​​​​ CourrierPriceAscComponent }​​​​​ from'./courrier-price-asc/courrier-price-asc.component';
import {​​​​​ CourrierPriceDescComponent }​​​​​ from'./courrier-price-desc/courrier-price-desc.component';
import { LandingComponent } from './landing/landing.component';
import { OrdersPriceAscComponent } from './orders-price-asc/orders-price-asc.component';
import { OrdersPriceDescComponent } from './orders-price-desc/orders-price-desc.component';
import { ProductPriceAscComponent } from './product-price-asc/product-price-asc.component';
import { ProductPriceDescComponent } from './product-price-desc/product-price-desc.component';






const routes: Routes = [
  {path:'',component:LandingComponent},
  {path: 'dashboard',component:CustomerDashboardComponent},
  {path: 'home', component: DashboardComponent},
  {path:'admin',component:AdminLoginComponent},
  {path: 'login', component: LoginComponent},
  {path: 'signup', component: SignupComponent},
  {path: 'contactus', component: ContactComponent},
  {path: 'privacy', component: PrivacyComponent},
  {path: 'help', component: HelpComponent},
  {path: 'forgot', component: ForgotComponent},
  {path: 'customer/show',component:RetrieveCustomerComponent},
  {path: 'product/asc',component:ProductPriceAscComponent},
  {path: 'product/desc',component:ProductPriceDescComponent},
  {path: 'new', component: UploadproductComponent},
  {path: 'edit/:id', component: EditproductComponent},
  {path: 'delete/:id', component: DeleteproductComponent},
  {path: 'show/:id', component: ShowproductComponent},
  {path:'carts',component:CartComponent},

  {path: 'orders/new',component:StoreOrdersComponent},
  {path: 'orders/update',component:UpdateOrdersComponent},
  {path: 'orders/delete', component:DeleteOrdersComponent},
  {path: 'orders/show', component:RetrieveOrdersComponent},
  {​​​​​path:'orders/asc',component:OrdersPriceAscComponent}​​​​​,
  {​​​​​path:'orders/desc',component:OrdersPriceDescComponent},​​​​​

  {path:'category/retrieve',component:CategoryretrieveComponent},
  {path:'category/update',component:CategoryupdateComponent},
  {path:'category/delete',component:CategorydeleteComponent},
  {path:'category/store',component:CategorystoreComponent},

  {path:'supplier/retrieve',component:SupplierretrieveComponent},
  {path:'supplier/update',component:SupplierupdateComponent},
  {path:'supplier/delete',component:SupplierdeleteComponent},
  {path:'supplier/store',component:SupplierstoreComponent},

  {path: 'courrier/new',component:StoreCourrierComponent},
  {path:'courrier/show',component:RetrieveCourrierComponent},
  {path: 'courrier/delete',component:DeleteCourrierComponent},
  {path: 'courrier/update',component:UpdateCourrierComponent},
  {​​​​​path:'courrier/asc',component:CourrierPriceAscComponent}​​​​​,
  {​​​​​path:'courrier/desc',component:CourrierPriceDescComponent}​​​​​

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
