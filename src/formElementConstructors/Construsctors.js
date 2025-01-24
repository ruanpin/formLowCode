export class Space_Y {
  constructor() {
    this.type = "space_Y";
    this.class = {
      paddingY: ""
    }
  }
}

export class Separator {
  constructor() {
    this.type = "separator";
  }
}

export class BasicOption {
  constructor() {
    this.label = "";
    this.value = "";
  }
}

class BasicInput {
  constructor() {
    this.name = "";
    this.label = "";
    this.field = "";
    this.value = "";
    this.required = false;
    this.originValue = ""
    this.class = {
      layoutFlex: "column"
    }
    this.cr_List = []
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
    this.options = [{ label: "", value: "" }];
    this.required = false;
    this.originValue = ""
    this.class = {
      layoutFlex: "column"
    }
    this.cr_List = []
  }
}

export class Radio extends BasicRadio {
  constructor () {
    super();
    this.type = "radio";
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
    this.originValue = ""
    this.class = {
      layoutFlex: "column"
    }
    this.cr_List = []
  }
}

export class Toggle extends BasicToggle {
  constructor() {
    super();
    this.type = "toggle";
  }
}

class BasicCheckbox {
  constructor() {
    this.name = "";
    this.label = "";
    this.field = "";
    this.value = [];
    this.options = [{ label: "", value: "" }];
    this.required = false;
    this.originValue = []
    this.class = {
      layoutFlex: "column"
    }
    this.cr_List = []
  }
}

export class Checkbox extends BasicCheckbox {
  constructor() {
    super()
    this.type = "checkbox";
  }
}

class BasicSelect {
  constructor() {
    this.name = "";
    this.label = "";
    this.field = "";
    this.value = "";
    this.options = [{ label: "", value: "" }];
    this.required = false;
    this.originValue = ""
    this.class = {
      layoutFlex: "column"
    }
    this.cr_List = []
  }
}

export class Select extends BasicSelect {
  constructor() {
    super()
    this.type = "select";
  }
}

class BasicUploadImg {
  constructor() {
    this.name = "";
    this.label = "";
    this.field = "";
    this.value = null; // 空字串q-file元件會報警告，因此這裡使用null
    this.previewImgURL = "";
    this.required = false;
    this.originValue = null
    this.class = {
      layoutFlex: "column"
    }
    this.cr_List = []
  }
}

export class UploadImg extends BasicUploadImg {
  constructor() {
    super()
    this.type = "uploadImg";
  }
}
