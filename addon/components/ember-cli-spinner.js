import { inject as service } from '@ember/service';
import { computed } from '@ember/object';
import Component from '@ember/component';
import { run } from '@ember/runloop';
import layout from '../templates/components/ember-cli-spinner';
import { htmlSafe } from '@ember/template';


export default Component.extend({
  layout: layout,
  timeout: undefined,
  isShow: false,
  runLater: null,
  type: "pulse", //default
  counters: [],
  className: "sk-spinner-pulse",
  bgColor: "rgba(0, 0, 0, 0.5)",
  height: "40px",
  width: "40px",
  bgColorStyle: computed('bgColor', function() {
    return htmlSafe('background:' + this.get('bgColor') + ';');
  }),
  sizeStyle: computed('height','width', function() {
    return htmlSafe('height:' + this.get('height')+ ';width:' + this.get('width') + ';');
  }),
  spinner: service(),
  color: "white",
  didInsertElement: function () {
    let spinner = this.get("spinner");
    let type = this.get("type");
    this.setAnimation(type); //Set Spinner Type
    spinner.add(this);
  },
  setColor: function (color) {
    this.set("color", color);
  },
  setBgColor: function (color) {
    this.set("bgColor", color);
  },
  setHeight: function (height) {
    this.set("height", height);
  },
  setWidth: function (width) {
    this.set("width", width);
  },
  setAnimation: function (type) {
    switch (type) {
      case "circles":
        this.set("className", "sk-circle");
        this.set("counters", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        break;
      case "pulse":
        this.set("className", "sk-spinner-pulse");
        this.set("counters", []);
        break;
      case "fading-circle":
        this.set("className", "sk-fading-circle");
        this.set("counters", [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12]);
        break;
      case "wave":
        this.set("className", "sk-wave");
        this.set("counters", [1, 2, 3, 4, 5]);
        break;
      case "rotating-plane":
        this.set("className", "sk-rotating-plane");
        this.set("counters", []);
        break;
      case "folding-cube":
        this.set("className", "sk-folding-cube");
        this.set("counters", [1, 2, 3, 4]);
        break;
      case "double-bounce":
        this.set("className", "sk-double-bounce");
        this.set("counters", [1, 2]);
        break;
      case "wandering-cubes":
        this.set("className", "sk-wandering-cubes");
        this.set("counters", [1, 2]);
        break;
      case "chasing-dots":
        this.set("className", "sk-chasing-dots");
        this.set("counters", [1, 2]);
        break;
      case "three-bounce":
        this.set("className", "sk-three-bounce");
        this.set("counters", [1, 2, 3]);
        break;
      case "three-bounce-horizontal":
        this.set("className", "sk-three-bounce-horizontal");
        this.set("counters", [1, 2, 3]);
        break;
      case "cube-grid":
        this.set("className", "sk-cube-grid");
        this.set("counters", [1, 2, 3, 4, 5, 6, 7, 8, 9]);
        break;
      default:
        this.set("className", "sk-spinner-pulse");
        this.set("counters", []);
        break;
    }
  },
  show: function (options) {
    let opts = options || {};
    let timeout = opts.timeout;
    if (timeout !== undefined) {
      this.set("isShow", true);
      this.set('runLater', run.later(this, function() {
        this.set("isShow", false);
        this.set('runLater', null);
      }, timeout));
    } else {
      this.set("isShow", true);
    }
  },
  hide: function () {
    this.set("isShow", false);
    if(this.get('runLater')) {
      run.cancel(this.get('runLater'));
    }
  }
});
