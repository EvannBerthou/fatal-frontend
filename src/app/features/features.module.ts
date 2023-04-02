import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { AdminModule } from './admin/admin.module';
import { QcmsModule } from './qcms/qcms.module';
import { UsersModule } from './users/users.module';
import { FeaturesRoutingModule } from './features-routing.module';


@NgModule({
  declarations: [],
  imports: [
    CommonModule,
    FeaturesRoutingModule,
    AdminModule,
    QcmsModule,
    UsersModule
  ]
})
export class FeaturesModule { }
