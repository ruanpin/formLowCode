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
    this.limitWordsAmount = ""
  }
}
export class Input_date extends BasicInput{
  constructor() {
    super();
    this.type = "input_date";
  }
}

export class Textarea extends BasicInput{
  constructor() {
    super();
    this.type = "textarea";
    this.limitWordsAmount = "";
    this.placeholdet = "";
  }
}

class BasicRadio {
  constructor() {
    this.name = "";
    this.label = "";
    this.field = "";
    this.value = "";
    this.options = [{ label: "", value: "" }]
    this.required = false;
  }
}

export class BasicOptionForRadio {
  constructor() {
    this.label = "";
    this.value = "";
  }
}

export class Radio extends BasicRadio {
  constructor () {
    super();
    this.type = "radio"
  }
}

class BasicToggle {
  constructor() {
    this.name = "";
    this.label = "";
    this.field = "";
    this.value = "";
    this.truevalue = "";
    this.falsevalue = "";
    this.required = false;
  }
}

export class Toggle extends BasicToggle {
  constructor() {
    super();
    this.type = "toggle";
  }
}
