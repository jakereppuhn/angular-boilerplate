import { Injectable } from "@angular/core";

@Injectable({
  providedIn: "root",
})
export class ThemeService {
  private themeKey = "color-theme"; 

  constructor() {
    const savedTheme = localStorage.getItem(this.themeKey);
    if (savedTheme) {
      this.applyTheme(savedTheme);
    } else {
      this.setLightTheme(); 
    }
  }

  applyTheme(theme: string) {
    if (theme === "dark") {
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
}
