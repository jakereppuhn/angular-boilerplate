import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "app-sidebar-layout",
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule],
  templateUrl: "./sidebar-layout.component.html",
})
export class SidebarLayoutComponent implements OnInit {
  sidebarExpanded = true;

  currentRoute: string;

  links = [
    { path: "/", label: "Dashboard", icon: "home"},
    { path: "/settings", label: "Settings", icon: "settings"},
  ];

  baseLinkClasses = "group relative my-1 flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-colors";
  activeLinkClasses = "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800";
  inactiveLinkClasses = "text-gray-600 hover:bg-blue-50";

  constructor(
    private router: Router
  ) {
    this.currentRoute = this.router.url;
  }

  ngOnInit() {
    const savedState = localStorage.getItem("sidebarExpanded");
    this.sidebarExpanded = savedState === "true";
  }

  isActive(route: string) {
    return this.currentRoute === route;
  }

  getLinkClasses(route: string) {
    return `${this.baseLinkClasses} ${this.isActive(route) ? this.activeLinkClasses : this.inactiveLinkClasses}`;
  }

  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
    localStorage.setItem("sidebarExpanded", String(this.sidebarExpanded));
  }
}
