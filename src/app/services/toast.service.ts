import { Injectable } from "@angular/core";
import { Subject } from "rxjs";

@Injectable({
  providedIn: "root",
})
export class ToastService {
  private toastSubject = new Subject<ToastMessage>();
  toastState = this.toastSubject.asObservable();

  showToast(message: string, type: "success" | "error" | "info") {
    this.toastSubject.next({ message, type });
  }
}

export interface ToastMessage {
  message: string;
  type: "success" | "error" | "info";
}
