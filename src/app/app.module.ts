import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { RouterModule } from '@angular/router';
import { AppComponent } from './app.component';
import { SidebarComponent } from './sidebar/sidebar.component';

import { UsersComponent } from './users/users.component';
import { AppRoutingModule } from './app-routing.module';
import { RegisterComponent } from './pages/register/register.component';
import { LoginComponent } from './pages/login/login.component';

import { HTTP_INTERCEPTORS, HttpClientModule } from '@angular/common/http';
import { HttpInterceptorService } from './services/http-interceptor/http-interceptor.service';
import { FormGroup, FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ConfirmregisterComponent } from './pages/confirmregister/confirmregister.component';
import { CustomersComponent } from './admin-panel/customers/customers.component';
import { AccessdeniedComponent } from './pages/accessdenied/accessdenied.component';
import { UserslistComponent } from './admin-panel/userslist/userslist.component';
import { NewuserComponent } from './admin-panel/newuser/newuser.component';
import { WelcomeadminComponent } from './pages/welcomeadmin/welcomeadmin.component';
import { WelcomeuserComponent } from './pages/welcomeuser/welcomeuser.component';
import { SidebaruserComponent } from './pages/sidebaruser/sidebaruser.component';
import { ProfileComponent } from './pages/profile/profile.component';
import { EdituserComponent } from './admin-panel/edituser/edituser.component';
import { TesttableComponent } from './testtable/testtable.component';

import { ChangepasswordComponent } from './pages/changepassword/changepassword.component';
import { NavbarComponent } from './components/navbar/navbar.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { HomeComponent } from './components/home/home.component';

import { ManageproductsComponent } from './admin-panel/manageproducts/manageproducts.component';
import { AddproductComponent } from './admin-panel/addproduct/addproduct.component';

import { ManagecategoriesComponent } from './admin-panel/managecategories/managecategories.component';
import { AddcategoryComponent } from './admin-panel/addcategory/addcategory.component';
import { EditcategoryComponent } from './admin-panel/editcategory/editcategory.component';
import { AdminuiComponent } from './admin-panel/adminui/adminui.component';
import { UserdashbordComponent } from './pages/userdashbord/userdashbord.component';
import { ProductViewDetailsComponent } from './components/product-view-details/product-view-details.component';
import { ProductsComponent } from './pages/products/products.component';
import { CartComponent } from './pages/cart/cart.component';



@NgModule({
  declarations: [
    AppComponent,
    SidebarComponent,
    UsersComponent,
   
    LoginComponent,
    RegisterComponent,
    UserdashbordComponent,
    ConfirmregisterComponent,
    CustomersComponent,
    AccessdeniedComponent,
    UserslistComponent,
    NewuserComponent,
    WelcomeadminComponent,
    WelcomeuserComponent,
    SidebaruserComponent,
    ProfileComponent,
    EdituserComponent,
    TesttableComponent,
   
    ChangepasswordComponent,
    NavbarComponent,
    CarouselComponent,
    HomeComponent,
  
    ManageproductsComponent,
    AddproductComponent,
  
    ManagecategoriesComponent,
    AddcategoryComponent,
    EditcategoryComponent,
    AdminuiComponent,
    ProductsComponent,
    CartComponent,
   
   ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule

  ],
  providers: [
    {provide :HTTP_INTERCEPTORS,
    useClass:HttpInterceptorService,
    multi:true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
