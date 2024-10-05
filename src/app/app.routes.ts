import { NgModule } from "@angular/core";
import { RouterModule, Routes } from "@angular/router";
import { AuthComponent } from "./features/auth/auth.component";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { SettingsComponent } from "./features/settings/settings.component";
import { SidebarComponent } from "./layouts/sidebar/sidebar.component";

export const routes: Routes = [
  {
    path: "",
    component: SidebarComponent,
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
  }
  
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
