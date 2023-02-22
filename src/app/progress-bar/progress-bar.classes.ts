export class ProgressBarOptions {
  value: number | undefined;
  color: string | undefined;
  displayValue: number | undefined;
  styleClass: string | undefined;
  constructor(initializer?: Partial<ProgressBarOptions>) {
    if(!!initializer) {
      Object.assign(this, initializer);
    }
  }
}
