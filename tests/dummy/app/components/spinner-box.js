import { inject as service } from '@ember/service';
import Component from '@ember/component';
import { action } from '@ember/object';

export default class SpinnerBox extends Component {
  @service spinner;
  timer = 2000;
  types = [
    {
      id: "circles",
      label: "Cirlces"
    },
    {
      id: "pulse",
      label: "Pulse"
    },
    {
      id: "fading-circle",
      label: "Fading Circles"
    },
    {
      id: "wave",
      label: "Wave"
    },
    {
      id: "double-bounce",
      label: "Double Bounce"
    },
    {
      id: "rotating-plane",
      label: "Rotating Plane"
    },
    {
      id: "folding-cube",
      label: "Folding Cube"
    },
    {
      id: "wandering-cubes",
      label: "Wandering Cubes"
    },
    {
      id: "chasing-dots",
      label: "Chasing Dots"
    },
    {
      id: "three-bounce",
      label: "Three Bounce"
    },
    {
      id: "three-bounce-horizontal",
      label: "Three Bounce Horizontal"
    }, {
      id: "cube-grid",
      label: "Cube Grid"
    }
  ];
  @action showBoxSpinner() {
    let spinner = this.get("spinner");
    let timer = this.get("timer");
    let type = document.querySelector(".box-select").value;
    spinner.setAnimation("box", type);
    spinner.show("box", {
      timeout: timer
    });
  }
}