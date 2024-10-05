import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

@Component({
  selector: "app-sidebar-layout",
  standalone: true,
  imports: [RouterOutlet, CommonModule],
  templateUrl: "./sidebar-layout.component.html",
})
export class SidebarLayoutComponent implements OnInit {
  sidebarExpanded = true;

  ngOnInit() {
    const savedState = localStorage.getItem("sidebarExpanded");
    this.sidebarExpanded = savedState === "true";
  }

  toggleSidebar() {
    this.sidebarExpanded = !this.sidebarExpanded;
    localStorage.setItem("sidebarExpanded", String(this.sidebarExpanded));
  }
}
