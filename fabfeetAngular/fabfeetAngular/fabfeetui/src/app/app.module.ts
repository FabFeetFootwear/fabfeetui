import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { LandingComponent } from './landing/landing.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';
import { LoginComponent } from './login/login.component';
import { SignupComponent } from './signup/signup.component';
import { UploadproductComponent } from './uploadproduct/uploadproduct.component';
import { HelpComponent } from './help/help.component';
import { ForgotComponent } from './forgot/forgot.component';
import { ContactComponent } from './contact/contact.component';
import { PrivacyComponent } from './privacy/privacy.component';
import { EditproductComponent } from './editproduct/editproduct.component';
import { DashboardComponent } from './dashboard/dashboard.component';
import { ShowproductComponent } from './showproduct/showproduct.component';
import {HttpClientModule} from '@angular/common/http';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';
import { DeleteproductComponent } from './deleteproduct/deleteproduct.component';
import { StoreOrdersComponent } from './store-orders/store-orders.component';
import { UpdateOrdersComponent } from './update-orders/update-orders.component';
import { RetrieveOrdersComponent } from './retrieve-orders/retrieve-orders.component';
import { DeleteOrdersComponent } from './delete-orders/delete-orders.component';

import { CategorystoreComponent } from './categorystore/categorystore.component';
import { CategoryretrieveComponent } from './categoryretrieve/categoryretrieve.component';
import { CategoryupdateComponent } from './categoryupdate/categoryupdate.component';
import { CategorydeleteComponent } from './categorydelete/categorydelete.component';
import { SupplierretrieveComponent } from './supplierretrieve/supplierretrieve.component';
import { SupplierdeleteComponent } from './supplierdelete/supplierdelete.component';
import { SupplierupdateComponent } from './supplierupdate/supplierupdate.component';
import { SupplierstoreComponent } from './supplierstore/supplierstore.component';
import { OrdersPriceAscComponent } from './orders-price-asc/orders-price-asc.component';
import { OrdersPriceDescComponent } from './orders-price-desc/orders-price-desc.component';

import { LogoutComponent } from './logout/logout.component';
import { FilterPipe } from './filter.pipe';
import { CustomerDashboardComponent } from './customer-dashboard/customer-dashboard.component';
import { AdminLoginComponent } from './admin-login/admin-login.component';
import { CartComponent } from './cart/cart.component';
import { StoreCourrierComponent } from './store-courrier/store-courrier.component';
import { UpdateCourrierComponent } from './update-courrier/update-courrier.component';
import { DeleteCourrierComponent } from './delete-courrier/delete-courrier.component';
import { RetrieveCourrierComponent } from './retrieve-courrier/retrieve-courrier.component';
import { RetrieveCustomerComponent } from './retrieve-customer/retrieve-customer.component';
import { CourrierPriceAscComponent } from './courrier-price-asc/courrier-price-asc.component';
import { CourrierPriceDescComponent } from './courrier-price-desc/courrier-price-desc.component';
import { ProductPriceAscComponent } from './product-price-asc/product-price-asc.component';
import { ProductPriceDescComponent } from './product-price-desc/product-price-desc.component';
import { NavbarComponent } from './navbar/navbar.component';
@NgModule({
  declarations: [
    AppComponent,
   LandingComponent,
    HeaderComponent,
    FooterComponent,
    LoginComponent,
    SignupComponent,
    UploadproductComponent,
    HelpComponent,
    ForgotComponent,
    ContactComponent,
    PrivacyComponent,
    EditproductComponent,
    DashboardComponent,
    ShowproductComponent,
    DeleteproductComponent,
    StoreOrdersComponent,
    UpdateOrdersComponent,
    RetrieveOrdersComponent,
    DeleteOrdersComponent,
   OrdersPriceAscComponent,
   OrdersPriceDescComponent,
    CategorystoreComponent,
    CategoryretrieveComponent,
    CategoryupdateComponent,
    CategorydeleteComponent,
    SupplierretrieveComponent,
    SupplierdeleteComponent,
    SupplierupdateComponent,
    SupplierstoreComponent,
    
    

    LogoutComponent,
    FilterPipe,
    CustomerDashboardComponent,
    AdminLoginComponent,
    CartComponent,
    StoreCourrierComponent,
    UpdateCourrierComponent,
    DeleteCourrierComponent,
    RetrieveCourrierComponent,
    RetrieveCustomerComponent,
    CourrierPriceAscComponent,
    CourrierPriceDescComponent,
    ProductPriceAscComponent,
    ProductPriceDescComponent,
    NavbarComponent,

  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,FormsModule,ReactiveFormsModule,
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
