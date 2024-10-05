import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./features/auth/auth.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { SettingsComponent } from "./features/settings/settings.component";
import { SidebarLayoutComponent } from "./layouts/sidebar-layout/sidebar-layout.component";
import { NotFoundComponent } from "./not-found/not-found.component";

export const routes: Routes = [
  {
    path: "",
    component: SidebarLayoutComponent,
    children: [
      {
        path: "",
        component: DashboardComponent
      },
      {
        path: "settings",
        component: SettingsComponent
      }
    ]
  },
  {
    path: "auth",
    component: AuthComponent
  },
  { path: "**", component: NotFoundComponent }
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
