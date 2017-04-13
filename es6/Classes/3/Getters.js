class Speaker {
  constructor(name, verb) {
    this.name = name;
    this._verb = verb || "says";
  }
  speak(text) {
    console.log(this.name + " " + this.verb + " '" + text + "'");
  }
  get verb() {
    return this._verb;
  }
}

class Shouter extends Speaker {
  constructor(name) {
    super(name, "shouts");
  }
  speak(text) {
    super.speak(text.toUpperCase());
  }
}


let shouter = new Shouter("Dr. Loudmouth");
shouter.speak(shouter.verb);
