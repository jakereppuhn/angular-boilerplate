import { Component } from "@angular/core";
import { ExampleService } from "../../services/example.service";

@Component({
  selector: "app-dashboard",
  standalone: true,
  imports: [],
  templateUrl: "./dashboard.component.html",
})
export class DashboardComponent {

  constructor(
    private exampleProductsService: ExampleService
  ) { }

  ngOnIt() {
    this.exampleProductsService.getExampleProducts("", {page: 0, perPage: 5}).subscribe((products) => {
      console.log(products);
    });
  }
}
