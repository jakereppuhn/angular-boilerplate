import { NgModule } from "@angular/core";
import { PreloadAllModules, RouterModule, Routes } from "@angular/router";
import { DashboardComponent } from "./features/dashboard/dashboard.component";
import { SettingsComponent } from "./features/settings/settings.component";

export const routes: Routes = [
  {
    path: "",
    component: DashboardComponent
  },
  {
    path: "settings",
    component: SettingsComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, { preloadingStrategy: PreloadAllModules })],
  exports: [RouterModule]
})
export class AppRoutingModule {}