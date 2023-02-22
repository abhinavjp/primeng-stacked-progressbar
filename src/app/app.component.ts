import { Component } from "@angular/core";
import { MessageService } from "primeng/api";
import { ProgressBarOptions } from "./progress-bar/progress-bar.classes";

@Component({
  selector: "app-root",
  templateUrl: "./app.component.html",
  providers: [MessageService],
})
export class AppComponent {
  value: number = 0;
  singleProgressBarOptions: ProgressBarOptions = new ProgressBarOptions({
    value: 50,
  });
  multipleProgressBarOptions: ProgressBarOptions[] = [
    new ProgressBarOptions({
      value: 20,
	  color: "#FF0000",
	  styleClass: "style-class-80"
    }),
    new ProgressBarOptions({
      value: 80,
	  color: "#090a0a",
	  styleClass: "style-class-20"
    })
  ];
  constructor(private messageService: MessageService) {}

  ngOnInit() {
    let interval = setInterval(() => {
      this.value = this.value + Math.floor(Math.random() * 10) + 1;
      if (this.value >= 100) {
        this.value = 100;
        this.messageService.add({
          severity: "info",
          summary: "Success",
          detail: "Process Completed",
        });
        clearInterval(interval);
      }
    }, 2000);
  }
}
