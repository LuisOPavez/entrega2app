import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FormsModule } from '@angular/forms';

import { IonicModule } from '@ionic/angular';

import { ProductosPageRoutingModule } from './productos-routing.module';

import { ProductosPage } from './productos.page';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { ApiProductosService } from 'src/app/service/api-productos.service';

@NgModule({
  imports: [
    CommonModule,
    FormsModule,
    IonicModule,
    ProductosPageRoutingModule,
    HttpClientModule
  ],
  declarations: [ProductosPage],
  providers:[ApiProductosService]
})
export class ProductosPageModule {}
