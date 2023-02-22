import { Component, Input, OnInit } from "@angular/core";
import { ProgressBarOptions } from "./progress-bar.classes";

@Component({
  selector: "app-progress-bar",
  templateUrl: "./progress-bar.component.html",
  styleUrls: ["./progress-bar.component.css"],
})
export class ProgressBarComponent implements OnInit {
  @Input() options: ProgressBarOptions | undefined;
  @Input() multipleOptions: ProgressBarOptions[] | undefined;
  @Input() displayValue: boolean = true;
  @Input() outerStyleClass: string | undefined;
  constructor() {}

  ngOnInit() {}
}
