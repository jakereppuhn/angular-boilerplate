import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeKey = "user-theme"; // LocalStorage key

  constructor() {
    this.loadSavedTheme();
  }

  // Apply the theme based on saved preference
  public loadSavedTheme() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme === "dark") {
      this.setDarkTheme();
    } else {
      this.setLightTheme(); // Default to light if no saved theme
    }
  }

  setDarkTheme() {
    document.body.classList.add("dark");
    localStorage.setItem(this.themeKey, "dark"); // Save preference in localStorage
  }

  setLightTheme() {
    document.body.classList.remove("dark");
    localStorage.setItem(this.themeKey, "light"); // Save preference in localStorage
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
    return localStorage.getItem(this.themeKey) || "light"; // Default to 'light'
  }
}
