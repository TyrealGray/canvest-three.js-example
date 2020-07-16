import {WebGLRenderer, PerspectiveCamera, Scene, Vector3} from 'three';
import SeedScene from '../src/objects/Scene.js';

let scene = null;
let camera = null;
let renderer = null;
let seedScene = null;
let handler = 0;

describe('SeedScene', () => {

	beforeEach(()=>{
		scene = new Scene();
		camera = new PerspectiveCamera(45, 800 / 600, 1, 1000);
		camera.position.set(6,3,-10);
		camera.lookAt(new Vector3(0,0,0));

		renderer = new WebGLRenderer({antialias: true, preserveDrawingBuffer: true});

		renderer.setSize(800, 600);
		renderer.setPixelRatio(window.devicePixelRatio);
		renderer.setClearColor(0x7ec0ee, 1);


		seedScene = new SeedScene();

		scene.add(seedScene);

		const onAnimationFrameHandler = () => {
			renderer.render(scene, camera);
			window.requestAnimationFrame(onAnimationFrameHandler);
		};
		handler = window.requestAnimationFrame(onAnimationFrameHandler);

	});

	afterEach(()=>{
		scene = null;
		camera = null;
		renderer = null;
		seedScene = null;

		window.cancelAnimationFrame(handler);
	});

	it('should render the same', async () => {

		seedScene.update(50000);

		await autoShot('Land', renderer.domElement);
	});

	it('should always failed because Land autoShot is saved as seedScene rotation y is 5', async () => {

		seedScene.update(2000);

		await autoShot('Land', renderer.domElement);
	});
});
