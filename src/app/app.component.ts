import { CommonModule } from "@angular/common";
import { Component, OnInit } from "@angular/core";
import { RouterOutlet } from "@angular/router";

import { ThemeService } from "./services/theme.service";

@Component({
  selector: "app-root",
  standalone: true,
  imports: [CommonModule, RouterOutlet],
  templateUrl: "./app.component.html",
})
export class AppComponent implements OnInit {
  title = "angular-boilerplate";

  constructor(private themeService: ThemeService) {}

  ngOnInit() {
    this.themeService.loadSavedTheme();
  }
}
