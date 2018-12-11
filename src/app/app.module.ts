import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule, HTTP_INTERCEPTORS } from '@angular/common/http';
import { AppComponent } from './app.component';
import { inputService } from './inputService.service';
import {NgRedux,NgReduxModule} from 'ng2-redux';
import {IAppState,rootReducer, INITIAL_STATE} from './store';
import {ReactiveFormsModule, FormsModule} from '@angular/forms';
import { NavBarComponent } from './nav-bar/nav-bar.component';
import { AudiobooksComponent } from './audiobooks/audiobooks.component';
import { BlogsComponent } from './blogs/blogs.component';
import { HomeComponent } from './home/home.component';
import { RegisterComponent } from './register/register.component';
import { Routes, RouterModule } from '@angular/router';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';
import {AngularFireModule} from 'angularfire2';
import {AngularFireDatabaseModule} from 'angularfire2/database';
import { environment } from '../environments/environment';
import { AngularFireAuth } from 'angularfire2/auth';
import { AuthGuardService } from './auth/auth-guard.service';
import { MyOrdersComponent } from './my-orders/my-orders.component';
import { AdminProductsComponent } from './admin-products/admin-products.component';
import { CheckOutComponent } from './check-out/check-out.component';
import { OrderDetailsComponent } from './order-details/order-details.component';
import { TokenInterceptor } from './auth/tokenInterceptor';


const routes:Routes=[
  {path:'Home',component:HomeComponent},
  {path:'Audio Books',component:AudiobooksComponent},
  {path:'Blogs',component:BlogsComponent},
  {path:'Sign In',component:RegisterComponent},
  {path:'My Orders',component:MyOrdersComponent,canActivate:[AuthGuardService]},
  {path:'admin/products',component:AdminProductsComponent, canActivate:[AuthGuardService]},
  {path:'checkOut',component:CheckOutComponent, canActivate:[AuthGuardService]},
  {path:'orderDetails',component:OrderDetailsComponent, canActivate:[AuthGuardService]},
  {path:'',component:HomeComponent},
  {path:'**',component:HomeComponent}
]

@NgModule({
  providers: [
    inputService,AngularFireAuth,AuthGuardService,
    {provide:HTTP_INTERCEPTORS,useClass:TokenInterceptor,multi:true}
  ],
  declarations: [
    AppComponent,
    HomeComponent,
    RegisterComponent,
    AudiobooksComponent,
    BlogsComponent,NavBarComponent,
    MyOrdersComponent,
    AdminProductsComponent,
    CheckOutComponent,
    OrderDetailsComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    NgReduxModule,
    ReactiveFormsModule,RouterModule.forRoot(routes),
    FormsModule,
    NgbModule,
    AngularFireModule.initializeApp(environment.firebase),
    AngularFireDatabaseModule
  ],
  bootstrap: [AppComponent] 
})
export class AppModule {
   constructor(ngRedux:NgRedux<IAppState>){
     ngRedux.configureStore(rootReducer,INITIAL_STATE);
   }
 }
