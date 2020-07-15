import { Group, ObjectLoader  } from 'three';

export default class Land extends Group {
  constructor() {
    const loader = new ObjectLoader();

    super();

    this.name = 'land';

    loader.load('./land.json', (mesh)=>{
      this.add(mesh);
    });
  }
}
