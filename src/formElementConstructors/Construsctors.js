export class Separator {
  constructor() {
    this.type = "separator";
  }
}
export class Input {
  constructor() {
    this.name = "";
    this.label = "";
    this.type = "input";
    this.field = "";
    this.value = "";
    this.required = false;
  }
}
export class Input_password {
  constructor() {
    this.name = "";
    this.label = "";
    this.type = "input_password";
    this.field = "";
    this.value = "";
    this.required = false;
    this.limitWordAmount = ""
  }
}
export class Input_date {
  constructor() {
    this.name = "";
    this.label = "";
    this.type = "input_date";
    this.field = "";
    this.value = "";
    this.required = false;
  }
}
