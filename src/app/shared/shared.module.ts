import { NgModule } from "@angular/core";
import { ChevronFirst, ChevronLast, Home, LayoutDashboard, LucideAngularModule, Menu, Settings, UserCheck, X } from "lucide-angular";

@NgModule({
  imports: [
    LucideAngularModule.pick({ Home, Menu, UserCheck, Settings, X, ChevronFirst, ChevronLast, LayoutDashboard })
  ],
  exports: [
    LucideAngularModule
  ]
})
export class SharedModule {}
