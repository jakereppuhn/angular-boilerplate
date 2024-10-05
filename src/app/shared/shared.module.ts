import { NgModule } from "@angular/core";
import { Home, LucideAngularModule, Menu, Settings, UserCheck, X } from "lucide-angular";

@NgModule({
  imports: [
    LucideAngularModule.pick({ Home, Menu, UserCheck, Settings, X })
  ],
  exports: [
    LucideAngularModule
  ]
})
export class SharedModule {}
