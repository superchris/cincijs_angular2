import "reflect-metadata";
import "zone.js";

import { bootstrap, Component, CORE_DIRECTIVES } from "angular2";

@Component({
  templateUrl: "src/cincijs.html",
  selector: "cincijs-app",
  directives: [CORE_DIRECTIVES]
})
class CinciJSApp {
  constructor() {
    this.peeps = [{name: "Fred"}, {name: "Gary"}];
  }
}

bootstrap(CinciJSApp, []);
