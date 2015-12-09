import {Component, CORE_DIRECTIVES, Input} from "angular2";

@Component({
  template: "{{peep.name}} is {{peep.age}}",
  selector: "peep-detail",

})
class PeepDetail {
  @Input() peep;
}

export default PeepDetail;
