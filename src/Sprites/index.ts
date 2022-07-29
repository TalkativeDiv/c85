import Player from "./Player";
import Background from "./Background";
import Car from "./Car";
import car1 from "../assets/icons/car1.png";

export default class Setup {
	public playerData = {
		x: 100,
		y: 450,
		w: 125,
		h: 125,
		src: "",
	};
	public bgData = {
		w: 0,
		h: 0,
		src: "",
	};

	constructor(
		public playerSrc: string,
		public bgH: number,
		public bgW: number,
		public bgSrc: string,
		public ctx: CanvasRenderingContext2D,
	) {
		this.playerData.src = playerSrc;
		this.bgData.w = this.bgW;
		this.bgData.h = this.bgH;
		this.bgData.src = this.bgSrc;
	}
	init = () => {
		const bg = new Background(this.bgData.src, this.bgData.w, this.bgData.h);
		const player = new Player(
			this.playerData.x,
			this.playerData.y,
			this.playerData.w,
			this.playerData.h,
			this.playerData.src,
			this.ctx,
		);
		// let car = new Car(50, 50, 128, 192, car1, this.ctx);
		bg.draw(this.ctx);
		// car.draw(this.ctx);
		player.registerListeners(this.ctx);
		player.draw(this.ctx);
	};
}
// let player = new Player(100, 450, 128, 128, "player.png", ctx);
// let bg = new Background("parking_lot.jpg", cvsTag.width, cvsTag.height);
