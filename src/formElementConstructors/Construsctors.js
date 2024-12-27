export class Input {
  constructor({ name, field, color, required }) {
    this.name = name;
    this.type = "input"
    this.field = field;
    this.color = color;
    this.value = "";
    this.required = required;
  }
}
