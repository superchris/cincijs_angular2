import "reflect-metadata";
import "zone.js";
import { bootstrap, Component, CORE_DIRECTIVES } from "angular2";
import PeepDetail from "./peep-detail";

@Component({
  templateUrl: "src/cincijs.html",
  selector: "cincijs-app",
  directives: [CORE_DIRECTIVES, PeepDetail]
})
class CinciJSApp {
  constructor() {
    this.peeps = [{name: "Fred", age: 25}, {name: "Gary", age: 43}];
  }
}

bootstrap(CinciJSApp, []);
