import { Group } from 'three';
import Land from './Land/Land.js';
import BasicLights from './Lights.js';

export default class SeedScene extends Group {
  constructor() {
    super();

    const land = new Land();
    const lights = new BasicLights();

    this.add(land, lights);
  }

  update(timeStamp) {
    this.rotation.y = timeStamp / 10000;
  }
}
