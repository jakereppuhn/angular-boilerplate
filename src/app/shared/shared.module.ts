import { NgModule } from "@angular/core";
import { Calendar, ChevronFirst, ChevronLast, Home, LayoutDashboard, LucideAngularModule, Menu, Moon, Settings, Sun, UserCheck, X } from "lucide-angular";

@NgModule({
  imports: [
    LucideAngularModule.pick({ Home, Menu, UserCheck, Settings, X, ChevronFirst, ChevronLast, LayoutDashboard, Moon, Sun, Calendar })
  ],
  exports: [
    LucideAngularModule
  ]
})
export class SharedModule {}
