import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AdminGuard } from "../core/guards/auth-admin.guard";
import { AuthGuard } from "../core/guards/auth.guard";

const routes: Routes = [
  {
    path: 'qcms',
    loadChildren: () => import('./qcms/qcms.module').then(m => m.QcmsModule),
    canLoad: [AuthGuard]
  },
  {
    path: 'users',
    loadChildren: () => import('./users/users.module').then(m => m.UsersModule)
  },
  {
    path: 'admin',
    loadChildren: () => import('./admin/admin.module').then(m => m.AdminModule),
    canLoad: [AdminGuard]
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],

})
export class FeaturesRoutingModule { }
