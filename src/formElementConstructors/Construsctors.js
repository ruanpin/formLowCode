export class Separator {
  constructor() {
    this.type = "separator";
  }
}

class BasicInput {
  constructor() {
    this.name = "";
    this.label = "";
    this.field = "";
    this.value = "";
    this.required = false;
  }
}
export class Input extends BasicInput{
  constructor() {
    super();
    this.type = "input";
  }
}
export class Input_password extends BasicInput{
  constructor() {
    super();
    this.type = "input_password";
    this.limitWordAmount = ""
  }
}
export class Input_date extends BasicInput{
  constructor() {
    super();
    this.type = "input_date";
  }
}
