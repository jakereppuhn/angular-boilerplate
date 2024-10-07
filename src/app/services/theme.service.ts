import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeKey = "user-theme";

  constructor() {
    this.loadSavedTheme();
  }

  public loadSavedTheme() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === "dark") {
      this.setDarkTheme();
    } else {
      this.setLightTheme();
    }
  }

  setDarkTheme() {
    document.body.classList.add("dark");
    localStorage.setItem(this.themeKey, "dark");
  }

  setLightTheme() {
    document.body.classList.remove("dark");
    localStorage.setItem(this.themeKey, "light");
  }

  toggleTheme() {
    const isDarkTheme = document.body.classList.contains("dark");
    if (isDarkTheme) {
      this.setLightTheme();
    } else {
      this.setDarkTheme();
    }
  }

  get currentTheme() {
    return localStorage.getItem(this.themeKey) || "light";
  }
}
