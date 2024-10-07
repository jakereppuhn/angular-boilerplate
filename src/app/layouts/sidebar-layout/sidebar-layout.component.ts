import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { Router, RouterOutlet } from "@angular/router";

import { ThemeService } from "../../services/theme.service";
import { ToastService } from "../../services/toast.service";
import { SharedModule } from "../../shared/shared.module";

@Component({
  selector: "app-sidebar-layout",
  standalone: true,
  imports: [RouterOutlet, CommonModule, SharedModule],
  templateUrl: "./sidebar-layout.component.html",
})
export class SidebarLayoutComponent implements OnInit {
  currentRoute: string;
  sidebarExpanded = true;

  links = [
    { path: "/", label: "Dashboard", icon: "layout-dashboard" },
    { path: "/calendar", label: "Calendar", icon: "calendar" },
  ];

  baseLinkClasses =
    "group relative flex cursor-pointer items-center rounded-md px-3 py-2 font-medium transition-all ease-in-out";
  activeLinkClasses =
    "bg-gradient-to-tr from-blue-200 to-blue-100 text-blue-800";
  inactiveLinkClasses = "text-primary hover:bg-background";

  constructor(
    private router: Router,
    private themeService: ThemeService,
    private toastService: ToastService
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

  getTheme() {
    let theme;

    if (document.body.classList.contains("dark")) {
      theme = "dark";
    } else {
      theme = "light";
    }
    return theme;
  }

  toggleTheme() {
    const theme = this.getTheme();

    if (theme === "dark") {
      this.themeService.setLightTheme();
    } else {
      this.themeService.setDarkTheme();
    }
  }

  showSuccessMessage() {
    this.toastService.showToast("Operation Successful!", "success");
  }

  showErrorMessage() {
    this.toastService.showToast("Something went wrong!", "error");
  }

  showInfoMessage() {
    this.toastService.showToast("This is an info message.", "info");
  }
}
